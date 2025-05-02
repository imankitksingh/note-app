import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  notes: localStorage.getItem("Notes")
    ? JSON.parse(localStorage.getItem("Notes"))
    : [],
};

const syncNotesToStorage = (notes) => {
  localStorage.setItem("Notes", JSON.stringify(notes));
};

export const NoteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const alreadyExist = state.notes.some(
        (item) => item.title === action.payload.title
      );

      if (alreadyExist) {
        toast.error("Already Exist");
        return;
      }

      if (action.payload.title.length === 0) {
        toast.error("Cannot Accept blank title");
      }else{
        state.notes.push(action.payload);
        syncNotesToStorage(state.notes);
        toast.success("Note Created Successfully");
      }

    },
    updateNote: (state, action) => {
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id
          ? {
              ...note,
              title: action.payload.title,
              content: action.payload.content,
            }
          : note
      );
      syncNotesToStorage(state.notes);

      toast.success("Note Updated Successfully");
    },
    removeNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      syncNotesToStorage(state.notes);

      toast.success("Note Removed Successfully");
    },
    removeAllNotes: (state, action) => {
      state.notes = [];
      syncNotesToStorage([]);

      toast.success("All notes have been deleted Successfully");
    },
  },
});

export const { addNote, updateNote, removeAllNotes, removeNote } =
  NoteSlice.actions;
export default NoteSlice.reducer;
