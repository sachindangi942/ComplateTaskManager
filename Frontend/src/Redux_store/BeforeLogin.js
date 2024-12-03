import { createSlice } from "@reduxjs/toolkit";

const initialState ={condition : ''}

const reducers =  {
    BeforeLogin : (state , action)=>{
                 const { condition } = action.payload;
                 state.condition = condition ;
    }
}

const slice_obj = createSlice({
    name:"B_login",
    initialState,
    reducers

});


export const { BeforeLogin } = slice_obj.actions;
export default slice_obj.reducer ; 