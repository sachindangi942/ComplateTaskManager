import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from "./UserComponent/Registration";
import MyLogin from "./UserComponent/Login";

// import Footer from '../GlobalComponent/Footer';
import NotFound from './NotFound';
// import ProductAdd from "./ProductComponent/ProductAdd";
import AddTask from './Task/AddTask';
import Header from './GlobalComponent/Header';
import ViewTask from './Task/ViewTask';
import Dashboard from './GlobalComponent/Dashboard';
import CreateUser from './UserComponent/CreateUser';
import UserTask from './Task/UserTask';



//================ Route session=====================
const App = () => {

    return (<Router>

        <Routes>
             <Route path='/usertask' element={<UserTask />} />

             <Route path='/createuser' element={<CreateUser/>} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/list' element={<ViewTask />} />
            <Route path='/registration' element={<Registration />} />

            <Route path='/registration/login' element={<MyLogin />} />
            <Route path="/login" element={<MyLogin />} />

            <Route path='task' element={<AddTask />} />


            <Route path='/' element={<Registration />} />



            <Route path='*' element={<NotFound />} />
        </Routes>

    </Router>
    )
};
export default App;

//================ Route session=====================


