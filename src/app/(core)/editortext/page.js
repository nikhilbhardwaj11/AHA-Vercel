"use client";

import React, { useState } from 'react';
// import dynamic from 'next/dynamic';

// const Editor = dynamic(() => import('../../../components/CkEditor/Editor'), { ssr: false });

 export default function editortext() {
//   const [editorData, setEditorData] = useState('<p>Hello from CKEditor 5!</p>');

//   const handleEditorChange = (data) => {
//     setEditorData(data);
//   };

  return (
    <div className='max-w-[1480px] mx-auto my-0 px-5 py-[80px] '>
{/*      
      <Editor data={editorData} onChange={handleEditorChange} />

      
      <h2 className=' pt-[80px]'>Output</h2>
      <pre dangerouslySetInnerHTML={{ __html: editorData }} />  */}


    </div>
  );
}
