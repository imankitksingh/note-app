import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addNote, updateNote } from "../Redux/StoreSlice";

const Home = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const noteId = searchParams.get("noteId")
  const dispatch = useDispatch()
  const allNotes = useSelector((state)=> state.note.notes)

  function createNote(){
     const note = {
      title: title,
      content: content,
      id: noteId || Date.now().toString(36),
      createdAt:  new Date().toISOString()
     }

     if(noteId){
       // update
      dispatch(updateNote(note)) 
     }else{
      // create
      dispatch(addNote(note))  
     }

     setTitle("")
     setContent("")
     setSearchParams("")
  }

  
useEffect(() => {
  if(noteId){
     const note = allNotes.find((n)=> n.id === noteId)
     setTitle(note.title)
     setContent(note.content)
  }
}, [noteId])

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center justify-center m-5 gap-10 ">
        <input
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-gray-300 p-1 rounded px-3 py-1 min-w-[616px]"
        />
        <button onClick={createNote} className="bg-gray-300 p-1 rounded px-3 py-1 cursor-pointer">{noteId ? "Update Note" : "Create Note"}</button>
      </div>
      <div>
        <textarea
          value={content}
          placeholder="Enter content here"
          onChange={(e) => setContent(e.target.value)}
          rows={20}
          cols={100}
          className="border rounded-xs p-2"
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
