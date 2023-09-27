import ModalComponen from "../Components/Modal"
import { loginWithGooogle } from "../API/Auth"
import useCheckAuth from "../Hooks/useCheckAuth"
import Document from "../Components/Document"

const Docs: React.FC = () => {

    const handleLogin = ()=>{
        loginWithGooogle();
    };
    const {isAuthenticated, userData} = useCheckAuth();
    console.log(userData);


  return (
    <div className="docs-container">
        {!isAuthenticated ? <ModalComponen title="Login With Google" handleLogin={handleLogin}>

        </ModalComponen> 
        :
        <>
          <Document photoURL = {userData?.photoURL}/>
        </>}
    </div>
  )
}

export default Docs