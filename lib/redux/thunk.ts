import { createAsyncThunk } from "@reduxjs/toolkit";
import { prisma } from "../prisma";
import { getCurrentUser, getFolders } from "../actions";

export const fetchFolders = createAsyncThunk(
    'folder/fetchFolders', 
    async() => {
        const response: Folder[] = await getFolders()
        return response
    }
)