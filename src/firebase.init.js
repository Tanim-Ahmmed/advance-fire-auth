// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqS1tFX-CQ5_KS9m2KV14IxP96JrRlhvc",
  authDomain: "advance-auth-f2564.firebaseapp.com",
  projectId: "advance-auth-f2564",
  storageBucket: "advance-auth-f2564.firebasestorage.app",
  messagingSenderId: "963378658476",
  appId: "1:963378658476:web:4f62689acb21a01dc87309"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
