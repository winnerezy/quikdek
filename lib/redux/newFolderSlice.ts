import { createSlice } from "@reduxjs/toolkit";

const newFolderSlice = createSlice({
    name: 'newfolder',
    initialState: {
        isOpen: false
    },
    reducers: {
        openNewFolderModal: (state) => {
            state.isOpen = true
        },
        closeNewFolderModal: (state) => {
            state.isOpen = false
        }
    }
})

export default newFolderSlice.reducer

export const { openNewFolderModal, closeNewFolderModal } = newFolderSlice.actions

