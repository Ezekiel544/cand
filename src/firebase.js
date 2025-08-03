import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";

// Firebase configuration (replace with your Firebase project config)
const firebaseConfig = {
  apiKey: "AIzaSyD7vnXRxTPVyJzubQCuWZR8WeiRKqSSOIA",
  authDomain: "candoxa-c7896.firebaseapp.com",
  projectId: "candoxa-c7896",
  storageBucket: "candoxa-c7896.firebasestorage.app",
  messagingSenderId: "757639938072",
  appId: "1:757639938072:web:9888926753f979f407036d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, addDoc, collection, query, where, getDocs };
