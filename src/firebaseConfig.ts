import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFmsFS9rmkBoWADvuD7wTH_JAr43s_m8Q",
  authDomain: "a-team-final-project.firebaseapp.com",
  projectId: "a-team-final-project",
  storageBucket: "a-team-final-project.appspot.com",
  messagingSenderId: "388402149331",
  appId: "1:388402149331:web:7a15d81dd5080edf94a126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {    signInWithPopup(auth, authProvider);  }  export function signOut(): void {    auth.signOut();  }