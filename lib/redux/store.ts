import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import newFolderReducer from "./newFolderSlice";
import folderReducer from "./folderSlice";

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        newfoldermodal: newFolderReducer,
        folder: folderReducer
    }
})

export type AppDispatch = typeof store.dispatch