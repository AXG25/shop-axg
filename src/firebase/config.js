// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ3Z-azncg0BVvSYP9W-a5xjPZoKEEr5Q",
  authDomain: "shop-axg-db.firebaseapp.com",
  projectId: "shop-axg-db",
  storageBucket: "shop-axg-db.appspot.com",
  messagingSenderId: "111126809992",
  appId: "1:111126809992:web:d3ead19c7dd1f52189fe3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Get a list of cities from your database
