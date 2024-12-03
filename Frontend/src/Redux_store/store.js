import { combineReducers, configureStore } from "@reduxjs/toolkit";
import A_login from "./AfterLogin";
import B_login from "./BeforeLogin"
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";


const rootReducer = combineReducers({
    A_login,
    B_login
});

const persistConfig ={
    key:"root",
    storage,
    
} 
 
const persistedReducer =  persistReducer(persistConfig , rootReducer)


const redux_store = configureStore({reducer:persistedReducer});


export default redux_store  ;

export const persistor =persistStore(redux_store);