// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv-29twn6dt1_pjX_Mds017AfcilGHKz0",
  authDomain: "blogproject-c5b43.firebaseapp.com",
  projectId: "blogproject-c5b43",
  storageBucket: "blogproject-c5b43.appspot.com",
  messagingSenderId: "732969387770",
  appId: "1:732969387770:web:1f51ac59fe0adac30aeb43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();