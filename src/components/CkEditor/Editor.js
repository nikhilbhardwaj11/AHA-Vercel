// "use client";

// import React from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react'; 
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic"; 

// const Editor = ({ data, onChange }) => {
//     const config = {
//         ckbox: {
//             tokenUrl: `${process.env.NEXT_PUBLIC_URL}/api/ckbox`,
//             theme: "lark",
//         },
//         toolbar: [
//             "ckbox",
//             "imageUpload",
//             "|",
//             "heading",
//             "|",
//             "undo",
//             "redo",
//             "|",
//             "bold",
//             "italic",
//             "|",
//             "blockQuote",
//             "indent",
//             "link",
//             "|",
//             "bulletedList",
//             "numberedList",
//         ],
//     };
//   return (
//     <div>
//       <CKEditor
//         editor={ClassicEditor}
//         config={config}
//         data={data}
//         onChange={(event, editor) => {
//           const data = editor.getData();
//           onChange(data);
//         }}
//       />
//     </div>
//   );
// };

// export default Editor;