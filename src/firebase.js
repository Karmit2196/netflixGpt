// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAP_5yopHglWEgbBwvWxPhpTQRAeNb67Ew",
  authDomain: "netflix-gpt-c3d0b.firebaseapp.com",
  projectId: "netflix-gpt-c3d0b",
  storageBucket: "netflix-gpt-c3d0b.firebasestorage.app",
  messagingSenderId: "400354980702",
  appId: "1:400354980702:web:a7dfc1188bd43cb85f15cf",
  measurementId: "G-BVE8N9G2BG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
