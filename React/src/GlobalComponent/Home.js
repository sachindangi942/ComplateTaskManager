import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Home = () => {
    const navigate = useNavigate();
    return <div style={{ border: "1px solid blue", color: "blue" }}>
        {/* <Header /><br></br> */}
        <h1>i am Home</h1>
        <h1>this is also home</h1>

        <button onClick={() => {
            setTimeout(() => {
                navigate("/contact")
            }, 2000)
        }}> Submit</button>

        {/* <br></br>
        <Footer /> */}
    </div>

};


export default Home;