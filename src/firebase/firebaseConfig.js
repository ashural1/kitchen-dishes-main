// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAPqms08xSoKe7mcAfhQus83yEWs84-zg",
  authDomain: "mykitchen-7c181.firebaseapp.com",
  projectId: "mykitchen-7c181",
  storageBucket: "mykitchen-7c181.appspot.com",
  messagingSenderId: "744041393147",
  appId: "1:744041393147:web:75158028ffb3fd19c0395e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
