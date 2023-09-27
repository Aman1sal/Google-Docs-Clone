import { GoogleAuthProvider} from "firebase/auth";
import {auth} from "../firebaseConfig"
import { signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider()

export const loginWithGooogle = () =>{
    signInWithPopup(auth, provider);
};

