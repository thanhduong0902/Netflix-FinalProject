import { useState, useEffect } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHEC_QpJA93av1qbaGa0ixU8_FDJO45BA",
  authDomain: "netflix-clone-de5f9.firebaseapp.com",
  projectId: "netflix-clone-de5f9",
  storageBucket: "netflix-clone-de5f9.appspot.com",
  messagingSenderId: "287682606578",
  appId: "1:287682606578:web:c8fe11c440516c7db9e76b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
    return signOut(auth)
}

// Custom Hook

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub
  });

  return currentUser;
}
