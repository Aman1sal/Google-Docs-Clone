import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBGPc3EHm045KsCADFT-LL407Bqi9EcAqQ",
  authDomain: "docs-clone-ce683.firebaseapp.com",
  projectId: "docs-clone-ce683",
  storageBucket: "docs-clone-ce683.appspot.com",
  messagingSenderId: "1071515951591",
  appId: "1:1071515951591:web:4a3c9684d91a5376dddd42",
  measurementId: "G-4TXY1NTJN9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);