import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./slices/slice1";
import { changeProfile } from "./slices/slice2";




const FetchReduxData = () => {

    const dispatch = useDispatch()
    const { name } = useSelector((state) => { return state.slice1 });
    const { profile } = useSelector((state) => state.slice2);

    return (<>
        <h1>name : {name}</h1>
        <h1>profile : {profile} </h1>


            

        <button onClick={()=> {
         dispatch (changeName({name : 'ISHWAR'}));
         dispatch( changeProfile({profile : 'MERN Devloper'}))
        }}>Update</button>
    </>)

};


export default FetchReduxData;















