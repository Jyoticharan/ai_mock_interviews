// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAxD-qB9mpl5uBpW4eTF2IQelBQcEidTM8",
  authDomain: "prepwise-b757b.firebaseapp.com",
  projectId: "prepwise-b757b",
  storageBucket: "prepwise-b757b.firebasestorage.app",
  messagingSenderId: "748541378731",
  appId: "1:748541378731:web:013abd99d8986057aff7ee",
  measurementId: "G-VR4CK6V7JV"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);