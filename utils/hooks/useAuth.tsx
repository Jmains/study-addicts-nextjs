import { useState, useEffect, useContext, createContext, ReactNode, useMemo } from "react";
import { auth, db } from "../../config/firebase";
import firebase from "firebase/app";

const AuthContext = createContext<any | undefined>(undefined);
type AuthProviderProps = { children: ReactNode };

const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("User from unsubscribe user useEffect: ", user);
      setUser(user);
      // if (user) {
      //   getUserAdditionalData(user);
      // }
    });
    return () => unsubscribe();
  }, []);

  // Update state while application is in use
  useEffect(() => {
    if (user?.uid) {
      // Subscribe to user document on mount
      const unsubscribe = db
        .collection("users")
        .doc(user.uid)
        .onSnapshot((doc) => setUser(doc.data()));
      return () => unsubscribe();
    }
  }, []);

  const createUser = async (user: any) => {
    try {
      await db.collection("users").doc(user.uid).set(user);
      console.log("User succesfully added to db");
    } catch (err) {
      throw {
        ok: false,
        message: "Failed to create user in FirestoreDB",
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
      // await createUser({ uid: userCredential?.user?.uid, email, firstName, lastName });
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

  const getUserAdditionalData = async (user: firebase.User) => {
    try {
      const userSnapshot: firebase.firestore.DocumentSnapshot = await db
        .collection("users")
        .doc(user.uid)
        .get();
      if (userSnapshot.data()) {
        setUser(userSnapshot.data());
      }
    } catch (err) {
      throw {
        ok: false,
        message: "Failed to get additional user data",
        details: err,
      };
    }
  };

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
      getUserAdditionalData,
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
