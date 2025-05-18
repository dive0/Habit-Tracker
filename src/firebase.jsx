import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCthPWkpYdvqtjg-BEZm2dIHbfIp2d3tZc",
  authDomain: "habit-tracker-b31a4.firebaseapp.com",
  projectId: "habit-tracker-b31a4",
  storageBucket: "habit-tracker-b31a4.firebasestorage.app",
  messagingSenderId: "740873353565",
  appId: "1:740873353565:web:b4d45756dfa55d6dcb10b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
