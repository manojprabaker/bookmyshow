import { createSlice } from "@reduxjs/toolkit";

const Slice=createSlice({
    name:"sample",
    initialState:{
        ticketsPriceAlone:1,
        seatNosarr:[],
        seatCategory:"",
        theatreNameTime:"", 
        showTime:"",
        searchMovie:"",
        googleUserName:"Sign in",
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
        },
         updatetheatreNameTime:(state,action)=>{
            state.theatreNameTime=action.payload;
        },
        updateshowTime:(state,action)=>{
            state.showTime=action.payload;
        },
        updatesearchMovie:(state,action)=>{
            state.searchMovie=action.payload;
        },
        updategoogleUserName:(state,action)=>{
            state.googleUserName=action.payload;
        },
    }
}) 

export const{updatePrice,updateArr,updateSeatCategory,updatetheatreNameTime,updateshowTime,updatesearchMovie,updategoogleUserName}=Slice.actions;
export default Slice.reducer;