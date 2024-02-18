import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

let initState = {
    users: [],
    error: "",
    isLoading: true
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (id)=>{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    return res.data.map(x => x.id);
});

let userSlice = createSlice({
    name: "users",
    initialState: initState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending,(state,action)=>{
            state.isLoading = true;
        })
        
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.users = action.payload;
        })

        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.isLoading = false;
            state.error =  action.error.message;
        })
    }
})


export default userSlice.reducer