import {firestore, auth} from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const docs = collection(firestore, 'docs')

type payloadType = {
    value: string,
}

export const createDoc = (payload: payloadType) =>{
    addDoc(docs, {...payload, userName: auth.currentUser?.displayName});
};