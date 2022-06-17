// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsjygSdb8TpISr8Oi9CxxMxr_yQwnctS4",
  authDomain: "todo-list-typescript.firebaseapp.com",
  projectId: "todo-list-typescript",
  storageBucket: "todo-list-typescript.appspot.com",
  messagingSenderId: "724342585150",
  appId: "1:724342585150:web:288827f66630ee80621e6f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);