import { createSlice } from "@reduxjs/toolkit";

const initialState =  { name : "ISD"};

const reducers  = { 
    changeName : (state , action)=> {
       const { name }  =  action.payload ; 
       state.name = name ; 
    }
}


const slice = {
    name:"display_name",
    initialState,
    reducers
};


const slice_obj = createSlice(slice) ;

export const { changeName } = slice_obj.actions;

export default  slice_obj.reducer ; 