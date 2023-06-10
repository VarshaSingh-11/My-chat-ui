
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCh3O7YE68_tWErfsUvJ3F9xq_M6lG6ouQ",
  authDomain: "chat-9ca36.firebaseapp.com",
  projectId: "chat-9ca36",
  storageBucket: "chat-9ca36.appspot.com",
  messagingSenderId: "934395309062",
  appId: "1:934395309062:web:36b1221feea1b522e02787"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();