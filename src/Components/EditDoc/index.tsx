import { useEffect, useRef, useState } from 'react';
import './index.scss'
import {BiArrowBack} from 'react-icons/bi'
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from '../../Toolbar';
import { editDoc, getCurrentDoc } from '../../API/Firestore';


const EditDoc = ({handleEdit, id}: functionInterface) => {
    const quillRef = useRef<any>(null);
     const [value, setValue] = useState('');
     const [title, setTitle] = useState('');
     const [currentDocument, setCurrentDocument] = useState({
      title: "",
      value: ""

     });

     function editDocument(){
      const payload = {
        value,
        title,
      }
      editDoc(payload,id);
     }

     
  const getCurrentDocument = ()=>{
    getCurrentDoc(id, setCurrentDocument);
  }

     useEffect(()=>{
      const debounced = setTimeout(()=>{

        editDocument();
      }, 2000);
      return() => clearTimeout(debounced);
     },[value, title]);


     useEffect(()=>{
            getCurrentDocument();
            quillRef.current.focus();

                  return ()=>{
        setCurrentDocument({
          title: '',
          value: ''
        })
      }
     },[])

     useEffect(()=>{
      setTitle(currentDocument.title);
      setValue(currentDocument.value);
     },[currentDocument])

  return (
    <div className='edit-container'>
        <BiArrowBack onClick={handleEdit} size={30} className="back-icon"/>
        <input value={title} onChange={(event)=>{setTitle(event.target.value)}} type="text" placeholder='Untitled' className="title-input" />
        <div className='quill-container'>
        <EditorToolbar />
        <ReactQuill className='react-quill' ref={quillRef} theme="snow" value={value} onChange={setValue} modules={modules} formats={formats} />
        </div>
    </div>
  )
}

export default EditDoc