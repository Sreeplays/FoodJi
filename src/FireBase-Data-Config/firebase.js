// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIFf3fzy4eUFWww08zJn9KEMVm9WCyKTM",
  authDomain: "foodji-b6167.firebaseapp.com",
  projectId: "foodji-b6167",
  storageBucket: "foodji-b6167.appspot.com",
  messagingSenderId: "37619649118",
  appId: "1:37619649118:web:933da22f65cf8b693082cf",
  measurementId: "G-YYMVQRT9V6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app)
export const db = getFirestore(app)