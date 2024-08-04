import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchFolders } from "./thunk";

const initialState: FolderState = {
    folders: [] as Folder[],
    loading: false,
    error: null
}

export const folderSlice = createSlice({
    name: 'folder',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchFolders.pending, (state) => {
            state.loading = true
            state.error = null
            state.folders = []
        })
        .addCase(fetchFolders.fulfilled, (state, action: PayloadAction<Folder[]>) => {
            state.loading = false
            state.error = null
            state.folders = action.payload
        })
        .addCase(fetchFolders.rejected, (state, action) => {
            state.loading = false
            state.error = 'Error fetching folders' || action.error.message
            state.folders = []
        })
        
    }
})

export default folderSlice.reducer