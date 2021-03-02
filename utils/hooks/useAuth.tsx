import { useState, useEffect, useContext, createContext, ReactNode, useMemo } from "react";
import { auth } from "../../config/firebase";
import firebase from "firebase/app";
import { fetchWithGet, fetchWithPost } from "@utils/api-helpers";
import useSWR from "swr";
// import prisma from "@lib/prisma";

const AuthContext = createContext<any | undefined>(undefined);
type AuthProviderProps = { children: ReactNode };

const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(async (user) => {
      if (user) {
        try {
          console.log("USER: ", user.uid);
          const userFromDb = await fetchUser(user.uid);
          console.log("USERFROMDB: ", userFromDb);

          setUser({ firstName: userFromDb.firstName, lastName: userFromDb.lastName, ...user });
        } catch (err) {
          console.log(err);
        }
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // force refresh the token every 10 minutes
  // useEffect(() => {
  //   const handle = setInterval(async () => {
  //     const user = firebase.auth().currentUser;
  //     if (user) await user.getIdToken(true);
  //   }, 10 * 60 * 1000);

  // clean up setInterval
  //   return () => clearInterval(handle);
  // }, []);

  // Update state while application is in use
  // useEffect(() => {
  //   if (user?.uid) {
  //     // Subscribe to user document on mount
  //     const unsubscribe = db
  //       .collection("users")
  //       .doc(user.uid)
  //       .onSnapshot((doc) => setUser(doc.data()));
  //     return () => unsubscribe();
  //   }
  // }, []);

  const fetchUser = async (uid: string) => {
    try {
      return await fetchWithPost("/api/user", { uid });
    } catch (err) {
      throw {
        ok: false,
        message: "Failed to fetch user from DB!",
        details: err,
      };
    }
  };

  const createUser = async (
    uid: string | undefined,
    email: string,
    firstName: string,
    lastName: string
  ) => {
    try {
      const userData = await fetchWithPost("/api/register", {
        uid,
        email,
        firstName,
        lastName,
      });
      console.log("User succesfully added to db: ", userData);
    } catch (err) {
      throw {
        ok: false,
        message: "Failed to create user in Postgres",
        details: err,
      };
    }
  };

  const register = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    try {
      const userCredential: firebase.auth.UserCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await auth.currentUser?.sendEmailVerification();
      await createUser(userCredential?.user?.uid, email, firstName, lastName);
    } catch (err) {
      console.log(err);
      throw {
        ok: false,
        message: "Failed to register",
        details: err,
      };
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const userCredential: firebase.auth.UserCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      setUser(userCredential?.user);
      // await getUserAdditionalData(user);
      return userCredential?.user;
    } catch (err) {
      throw {
        ok: false,
        message: "Invalid email or password. Please try again.",
        details: err,
      };
    }
  };

  // const getUserAdditionalData = async (firebaseUser: firebase.User) => {
  //   try {
  //     // email! is very bad change this later sweeps
  //     const user = await prisma.user.findUnique({
  //       where: {
  //         email: firebaseUser.email!
  //       }
  //     })

  //     if (user) {
  //       setUser(user);
  //     }
  //   } catch (err) {
  //     throw {
  //       ok: false,
  //       message: "Failed to get additional user data",
  //       details: err,
  //     };
  //   }
  // };

  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (err) {
      throw {
        ok: false,
        message: "Failed to sign out",
        details: err,
      };
    }
  };

  const sendPasswordResetEmail = async (email: string) => {
    try {
      await auth.sendPasswordResetEmail(email);
    } catch (err) {
      throw {
        ok: false,
        message: "Failed to send password reset email",
        details: err,
      };
    }
  };

  const values = useMemo(
    () => ({
      user,
      login,
      logout,
      register,
      sendPasswordResetEmail,
      // getUserAdditionalData,
    }),
    [user]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }
  return context;
};

export { useAuth, AuthProvider };
