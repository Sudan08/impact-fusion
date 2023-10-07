import Navbar from "./Navbar"
import Footer from "./Footer"
import { ReactNode } from "react";
const HomeLayout = (
    {children} : {children : ReactNode}
) => {
    return (
        <>
            <Navbar/>
                {children}
            <Footer/>
        </>
    )
}

export default HomeLayout;