import './index.scss'
import addDoc from '../../assets/AddDoc.png'
import { useState } from 'react'
import EditDoc from '../EditDoc'

const CreateDoc = () => {
    const [isEdit, setIsEdit] = useState(false);
    const handleEdit = ()=>{
        setIsEdit(!isEdit)
    }

    if(isEdit) return <EditDoc handleEdit={handleEdit}/>

  return (
    <div className='new-doc-container'>
        <div className="new-doc-inner">
        <p>Start a new document</p>
        <img className='start-doc' src={addDoc} alt="" onClick={handleEdit} />
        <p className='title'>Blank</p>
        </div>
    </div>
  )
}

export default CreateDoc