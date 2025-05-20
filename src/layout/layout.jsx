import { Outlet } from "react-router";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default  function Layout() {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>  
        </>
    );
}
