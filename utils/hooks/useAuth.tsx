import { useState, useEffect, useContext, createContext, ReactNode, useMemo } from "react";
import { auth } from "@lib/initFirebase";
import firebase from "firebase/app";
import { fetchWithPost } from "@utils/apiHelpers";
import { getUserFromCookie, removeUserCookie, setUserCookie } from "@utils/userCookies";

const AuthContext = createContext<any | undefined>(undefined);
type AuthProviderProps = { children: ReactNode };

export interface User {
  id: string;
  token: string;
  firstName: string;
  lastName?: string;
  email: string;
  profilePic?: string;
}

const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | firebase.User | null>(null);

  useEffect(() => {
    // Firebase updates the id token every hour, this
    // makes sure the react state and the cookie are
    // both kept up to date
    const unsubAuthListener = auth.onIdTokenChanged(async (user) => {
      console.log("%c Firing onIdTokenChanged", "color: #29d629; background: #222");
      if (user) {
        try {
          const token = await user.getIdToken(); // pass true to force refresh token
          const { firstName, lastName, email, profilePic, id } = await fetchUserFromDb(
            user.uid
          );
          setUser({ firstName, lastName, email, profilePic, id, token });
          setUserCookie({ firstName, lastName, email, profilePic, id, token });
        } catch (err) {
          console.error(err);
        }
      } else {
        removeUserCookie();
        setUser(null);
      }
    });

    const userFromCookie = getUserFromCookie();
    if (!userFromCookie) {
      return;
    }
    setUser(userFromCookie);

    return () => unsubAuthListener();
  }, []);

  const fetchUserFromDb = async (uid: string) => {
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
    } catch (err) {
      throw {
        ok: false,
        message: "Invalid email or password. Please try again.",
        details: err,
      };
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (err) {
      console.error(err);
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
