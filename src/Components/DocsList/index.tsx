import './index.scss'
import { getDocuments } from '../../API/Firestore'
import { useEffect, useState } from 'react';

type OpendocType = {
  openDoc: (id:string, value: string, title: string)=> void;
}

const DocsList = ({openDoc}: OpendocType) => {

  const [docs, setDocs] = useState([{
    id: "",
    username: "",
    value: "",
    title: "",
  }])
  const getDocs = async ()=>{
    const response = await getDocuments(setDocs);
    console.log(response)
  };
  useEffect(()=>{
    getDocs();
  },[]);

  console.log(docs);

  return (
    <div className='docs-main'>{docs.map((doc)=>{
      return <div onClick={()=>openDoc(doc.id, doc.value, doc.title)} className='doc-card'>
        <p className='doc-title'>
        {doc.title}
        </p>
        <p className="doc-content" dangerouslySetInnerHTML={{__html: doc.value.substring(0,200)}}></p>
        </div>
    })}
    </div>
  )
}

export default DocsList