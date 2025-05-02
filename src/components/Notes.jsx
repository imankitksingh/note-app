import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNote } from "../Redux/StoreSlice";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const Notes = () => {
  const notes = useSelector((state) => state.note.notes);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const filteredData = (notes || []).filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(removeNote(id));
  };

  return (
    <div className="flex flex-col items-center">
      <input
        className="bg-gray-300 p-1 rounded px-3 py-1 min-w-[616px] m-4"
        type="search"
        placeholder="Search here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex flex-col gap-5 mt-5">
        {filteredData.map((n) => (
          <div
            key={n.id}
            className="border p-5 flex justify-between gap-20 w-[1000px] rounded-xs"
          >
            <div>
              <div className="font-medium mb-4">{n.title}</div>
              <div>{n.content}</div>
            </div>  
            <div className="flex flex-col items-end justify-between">
              <div className="flex gap-4">  
                <button className="cursor-pointer border px-1 rounded-sm w-[60px]">
                  <NavLink to={`/notes/${n?.id}`}>View</NavLink>  
                </button>
                <button className="cursor-pointer border px-1 rounded-sm w-[60px]" onClick={() => {
                  navigator.clipboard.writeText
                  (n?.content)  
                  toast.success("copied to clipboard")
                }}>
                  Copy
                </button>
                <button className="cursor-pointer  border px-1 rounded-sm w-[60px]">
                  <NavLink to={`/?noteId=${n?.id}`}>Edit</NavLink>
                </button>
                <button className="cursor-pointer border px-1 rounded-sm w-[60px]" onClick={() => handleDelete(n?.id)}>Delete</button>
              </div>
              <div>
                {new Date(n.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
