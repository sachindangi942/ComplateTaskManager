import { createSlice } from "@reduxjs/toolkit";


const initialState = {profile:"React Devloper"};
const reducers = {
    changeProfile : (state , action)=>{
        const {profile} = action.payload
        state.profile = profile ; 
    }
};
const slice = {
    name:'slice2',
    initialState,
    reducers
};


const slice_obj = createSlice(slice);

export const {changeProfile} = slice_obj.actions;

export default slice_obj.reducer