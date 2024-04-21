import app from "./firebaseapp.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database"; // Removed unnecessary import 'push'

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Sign in function
export const signIn = async (email, password) => {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
};

// Signup function
export const signUp = async (email, password, username) => {
  let result = null,
    error = null, alreadyExist = false;
  try {
    const db = getDatabase(app);
    const usersRef = ref(db, "users");
    const snapshot = await get(usersRef);
    const users = snapshot.val();
    // Check if a user with the given email already exists
    for (let userId in users) {
      if (users[userId].email === email) {
        alreadyExist = true
        return { error: 'A user with this email already exists.', alreadyExist };
      }
    }

    result = await createUserWithEmailAndPassword(auth, email, password);
    if (username) {
      await updateProfile(auth.currentUser, {
        displayName: username,
      });
    }

    const userRef = ref(db, "users/" + auth.currentUser.uid);

    await set(userRef, {
      email: auth.currentUser.email,
      username: username || "",
      authType: auth.currentUser.emailVerified ? "google" : "email",
      phone: "",
      isPremium: false,
      userId: auth.currentUser.uid,
      imgUrl: auth.currentUser.photoURL || "",
      tests: [{ placeholder: true }],
      quizes:[{ placeholder: true }],
      performance:[{ placeholder: true }],
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export const logout = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      alert("Error while logging out");
    });
};

// Google pop up sign in
export const googleSignIn = async (type) => {
  let result = null,
    error = null, alreadyExist = false;
  try {
    const provider = new GoogleAuthProvider();
    result = await signInWithPopup(auth, provider);

    const db = getDatabase(app);
    const usersRef = ref(db, "users");
    const snapshot = await get(usersRef);
    const users = snapshot.val();

    // Check if a user with the given email already exists
    for (let userId in users) {
      if (users[userId].email === result.user.email) {
        alreadyExist = true;
        break;
        // return { error: 'A user with this email already exists.', alreadyExist };
      }
    }

    if (type === "signup" && !alreadyExist) {
      const userRef = ref(db, "users/" + result.user.uid);
      await set(userRef, {
        email: result.user.email,
        username: result.user.displayName || "",
        authType: "google",
        phone: "",
        isPremium: false,
        userId: result.user.uid,
        imgUrl: result.user.photoURL || "",
      });
    }else if (type === "login" && !alreadyExist) {
      await signOut(auth);
      // throw new Error('No user with this email found. Please sign up first.');
    }
  } catch (e) {
    error = e;
  }

  return { result, error, alreadyExist };
};


//Passwordless Sign In
export const passwordLessSignIn = async (email) => {
  let result = null,
    error = null;
  try {
    await sendSignInLinkToEmail(auth, email, {
      url: "http://localhost:3000/", // URL to redirect the user to after email confirmation
      handleCodeInApp: true,
    });
    window.localStorage.setItem("emailForSignIn", email);
    alert("Check your email for the sign-in link");
    result = "Email sent successfully. Please check your inbox.";
  } catch (e) {
    error = e;
  }

  return { result, error };
};
