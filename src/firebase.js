import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAXJBMuLpVCZ-Tm1PtNjGryJ_lkNUxxWrQ",
  authDomain: "netflix-ef806.firebaseapp.com",
  projectId: "netflix-ef806",
  storageBucket: "netflix-ef806.appspot.com",
  messagingSenderId: "174603455731",
  appId: "1:174603455731:web:1b29c1d47b0123aaf0fb86"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {auth};
export default db;