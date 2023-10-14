import { useState } from 'react';

import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebase';


export default function AddBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


 async function handleSubmit(e){
    e.preventDefault();
    
const docRef = await addDoc(collection(db, "blogdata"), {
    title,
    content
  });
  console.log("Document written with ID: ", docRef.id);
    
   
    

  }
  return (
    <>
      <div className="p-4 border-2 m-4 ">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="border-2 border-gray-400  my-4 outline-none w-full p-2"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <select 
            className="border-2 border-gray-400  my-4 outline-none w-full p-2"
            >
              <option value="" key="">
                Select Type
              </option>
              <option value="React" key="react">
                React
              </option>
              <option value="Html" key="html">
              HTML
            </option> <option value="Css" key="css">
                CSS
              </option> <option value="JavaScript" key="js">
                JavaScript
              </option> <option value="Node-Js" key="node">
              Node-Js
            </option>
              
            </select>
          </div>
          <div>
            <textarea
              className="border-2 border-gray-400  my-4 outline-none w-full p-2"
              type="text"
              placeholder="Content"
              rows={10}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button className="bg-green-500 px-8 py-4 mx-24 rounded-md text-xl md:m-0 ">
            Publish
          </button>
        </form>
      </div>
    </>
  );
}
