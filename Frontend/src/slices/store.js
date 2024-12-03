

import { persistReducer, persistStore } from 'redux-persist';
import slice1 from './slice1';
import slice2 from './slice2';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';


const persistConfig = {
    key:"root",
    storage,
    whitelist:['slice1']
};


const rootReducer = combineReducers({
    slice1 ,
    slice2
})
const persistedReducer = persistReducer(persistConfig , rootReducer);

const  redux_store = configureStore({
    reducer:persistedReducer
});

export const persist_store = persistStore(redux_store);
export default redux_store ; 

















// import { combineReducers, configureStore } from "@reduxjs/toolkit";


// import slice1  from "./slice1";
// import slice2  from "./slice2";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const rootReducer = combineReducers({
//     slice1,
//     slice2
// })

// const persistConfig = {
//     key:"root",
//     storage,
//     whitelist:["slice1"]
// }

// const persistedReducer = persistReducer(persistConfig,rootReducer);






// const redux_store = configureStore({
//     reducer:persistedReducer
// });



// export const  persistore = persistStore(redux_store); 




// export default redux_store ; 





//**************************store with out persist *********************************************8 */

// import { combineReducers, configureStore } from "@reduxjs/toolkit";


// import slice1  from "./slice1";
// import slice2  from "./slice2";


// const reducer = combineReducers({
//     slice1,
//     slice2
// })


// const redux_store = configureStore({
//     reducer
// });



// export default redux_store ;  
































