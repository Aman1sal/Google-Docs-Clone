import { useEffect, useRef, useState } from 'react';
import './index.scss'
import {BiArrowBack} from 'react-icons/bi'
import ReactQuill from 'react-quill';
import {toolbarOptions} from '../../Toolbar' 


const EditDoc = ({handleEdit}: functionInterface) => {
    const quillRef = useRef<any>(null);
     const [value, setValue] = useState('');

     useEffect(()=>{
            quillRef.current.focus();
     },[])
  return (
    <div className='edit-container'>
        <BiArrowBack onClick={handleEdit} size={30} className="back-icon"/>
        <div className='quill-container'>
        <ReactQuill ref={quillRef} theme="snow" value={value} onChange={setValue} />
        </div>
    </div>
  )
}

export default EditDoc