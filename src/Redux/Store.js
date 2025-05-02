import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./StoreSlice"
export const Store = configureStore({
    reducer: {
        note: noteReducer
    }
})