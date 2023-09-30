import {firestore, auth} from "../firebaseConfig";
import { addDoc, collection, doc, updateDoc, getDocs } from "firebase/firestore";

const docs = collection(firestore, 'docs')

type payloadType = {
    value: string,
}

export const createDoc = (payload: payloadType) =>{
    addDoc(docs, {...payload, userName: auth.currentUser?.displayName});
};

export const getDocuments = (setDocs: any)=>{
    getDocs(docs)
    .then((response)=>{
        setDocs(
            response.docs.map((doc)=>{
                return {...doc.data(), id: doc.id};
            })
        );
    })
    .catch((err)=>{
        console.log(err);
    })
};

export const editDoc = (payload: payloadType, id) =>{
    const docToEdit = doc(docs, id)
    updateDoc(docToEdit, {...payload},id);
};