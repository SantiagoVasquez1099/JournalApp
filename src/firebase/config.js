// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFJKmhKpe5vr3oS0YGbllAZjBUkMPlK24",
  authDomain: "journalapp-ce6b5.firebaseapp.com",
  projectId: "journalapp-ce6b5",
  storageBucket: "journalapp-ce6b5.appspot.com",
  messagingSenderId: "449981006523",
  appId: "1:449981006523:web:e29d0742ebf22cd5bd5f9e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore ( FirebaseApp );