import CreateDoc from '../CreateDoc'
import Topbar from '../Topbar'
import DocsList from '../DocsList'
import './index.scss'
import { useState } from 'react'

const Document = ({photoURL}: TopbarProps) => {

  const [id, setId] = useState('');
  const openDoc = (id:string)=>{
    setIsEdit(!isEdit);
    setId(id);
  }


  const [isEdit, setIsEdit] = useState(false);



  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div>
        <Topbar photoURL = {photoURL}/>
        <CreateDoc id={id} isEdit={isEdit} handleEdit={handleEdit}/>
        {isEdit ? <></> :<DocsList openDoc={openDoc}/>}
    </div>
  )
}

export default Document