import { useEffect, useRef, useState } from 'react';
import './index.scss'
import {BiArrowBack} from 'react-icons/bi'
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from '../../Toolbar';
import { createDoc } from '../../API/Firestore';


const EditDoc = ({handleEdit}: functionInterface) => {
    const quillRef = useRef<any>(null);
     const [value, setValue] = useState('');

     function addDocData(){
      const payload = {
        value,
      }
      createDoc(payload);
     }

     useEffect(()=>{
      const debounced = setTimeout(()=>{
        // addDocData();
      }, 2000);
      return() => clearTimeout(debounced);
     },[]);


     useEffect(()=>{
            quillRef.current.focus();
     },[])
  return (
    <div className='edit-container'>
        <BiArrowBack onClick={handleEdit} size={30} className="back-icon"/>
        <div className='quill-container'>
        <EditorToolbar />
        <ReactQuill className='react-quill' ref={quillRef} theme="snow" value={value} onChange={setValue} modules={modules} formats={formats} />
        </div>
    </div>
  )
}

export default EditDoc