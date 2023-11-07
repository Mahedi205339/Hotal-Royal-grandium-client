import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default App;