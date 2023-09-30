import './index.scss'
import addDoc from '../../assets/AddDoc.png'
import EditDoc from '../EditDoc'
import {createDoc} from '../../API/Firestore'

type isEditType = {
  isEdit: boolean,
  handleEdit: ()=> void,
  id: string
  docData: object;
}

const CreateDoc = ({isEdit, handleEdit, id, docData}: isEditType) => {


  const createDocument = () => {
    const payload = {
      value: '',
    };
    createDoc(payload);
  };
  console.log(id);

    if(isEdit) return <EditDoc docData={docData} handleEdit={handleEdit} id={id}/>

  return (
    <div className='new-doc-container'>
        <div className="new-doc-inner">
        <p>Start a new document</p>
        <img className='start-doc' src={addDoc} alt=""           onClick={() => {
            handleEdit();
            createDocument(); // Call both functions on click
          }} />
        <p className='title'>Blank</p>
        </div>
    </div>
  )
}

export default CreateDoc