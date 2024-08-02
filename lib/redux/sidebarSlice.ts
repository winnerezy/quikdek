import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isOpen: false
    },
    reducers: {
        openSideBar: (state) => {
            state.isOpen = true
        },
        closeSideBar: (state) => {
            state.isOpen = false
        }
    }
})

export default sidebarSlice.reducer

export const { openSideBar, closeSideBar } = sidebarSlice.actions
