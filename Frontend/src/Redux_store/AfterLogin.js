import { createSlice } from "@reduxjs/toolkit";

const initialState ={Role : ""}

const reducers =  {
    AfterLogin : (state , actions)=>{
        
                 const { Role } = actions.payload;
                 state.Role = Role ;
                
    }
}

const slice_obj = createSlice({
    name:"A_login",
    initialState,
    reducers

});


export const { AfterLogin } = slice_obj.actions;
export default slice_obj.reducer ; 