
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD4d-Dtme2HZlCcoNhjRbcVrPaoZLKSvzs",
  authDomain: "test-83-72d65.firebaseapp.com",
  projectId: "test-83-72d65",
  storageBucket: "test-83-72d65.firebasestorage.app",
  messagingSenderId: "796801822232",
  appId: "1:796801822232:web:04a5e038e80f6381001d6d",
  measurementId: "G-14YL016EJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
