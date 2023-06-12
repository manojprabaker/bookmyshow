import { createSlice } from "@reduxjs/toolkit";

const Slice=createSlice({
    name:"sample",
    initialState:{
        ticketsPriceAlone:1,
        seatNosarr:[],
        seatCategory:"",
        hasPassed:false,
    },
    reducers:{
        updatePrice:(state,action)=>{
            state.ticketsPriceAlone=action.payload;
        },
        updateArr:(state,action)=>{
            state.seatNosarr=action.payload;
        },
        updateSeatCategory:(state,action)=>{
            state.seatCategory=action.payload;
        }
    }
})

export const{updatePrice,updateArr,updateSeatCategory}=Slice.actions;
export default Slice.reducer;