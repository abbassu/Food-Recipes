import React from "react";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../utils/utils";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
function Layout(){
    const e=4
    return(
        <GlobalContext.Provider value={e}>
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
        </GlobalContext.Provider>

    )
}
export default Layout