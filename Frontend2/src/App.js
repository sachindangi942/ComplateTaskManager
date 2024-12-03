import { Provider } from "react-redux"
import redux_store, { persist_store } from "./slices/store"
import FetchReduxData from "./FetchReduxData"
import { PersistGate } from "redux-persist/integration/react";


const App = () => {
   return(
    <Provider store={redux_store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persist_store}>
      <FetchReduxData />
      </PersistGate>
      
    </Provider>
   )
};


export default App ; 