import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";


const useCheckAuth = () => {
    const [isAuthenticated, setIsAuth] = useState(false);
    const[userData, setUserData] = useState({
      photoURL: "",
    })
    useEffect(()=>{
            onAuthStateChanged(auth, (response: any)=>{
                if(response){
                  setUserData(response)
                  setIsAuth(true);
                }
                else{
                  setIsAuth(false);
                }
            });
    },[]);
  return {isAuthenticated, userData};
}

export default useCheckAuth