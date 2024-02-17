import { createSlice } from '@reduxjs/toolkit'

let initState = {cakes:0,mark:[]}

let cakeSlice = createSlice({
    name:"cakes",
    initialState:initState,
    reducers:{
        increament:(state, action)=>{
            let inc = action.payload ?  action.payload : 1;
            state.cakes += inc;
        },
        decreament:(state, action)=>{
            let dec = action.payload ?  action.payload : 1;
            state.cakes -= dec;
        },
        log:(state)=>{
            state.mark.push(state.cakes)
            return state;
        }
    }
})

export const { increament, decreament,log } = cakeSlice.actions;
export default cakeSlice.reducer;