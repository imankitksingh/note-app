import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ViewNote = () => {

  const {id} = useParams()
  const  allNotes = useSelector((state)=> state.note.notes)
  const note = allNotes.filter((n)=> n.id === id)[0]

  return (
    <div className='flex flex-col items-center'>
    <div className="flex flex-row items-center justify-center m-5 gap-10">
      <input
        type="text"
        placeholder="Enter title here"
        value={note.title}
        disabled
        className="bg-gray-300 p-1 rounded px-3 py-1 min-w-[760px]"
      />
    </div>
    <div>
      <textarea
        value={note.content}
        placeholder="Enter content here"
        disabled
        rows={20}
         cols={100}
          className="border rounded-xs p-2"
      ></textarea>
    </div>
  </div>
  )
}

export default ViewNote