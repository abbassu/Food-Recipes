import React from "react";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../utils/utils";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import "./lay.css"
function Layout(){
    const e=4
    const api="641db865db1f453e8bdaec0a7c2aefc8"
    return(
        <GlobalContext.Provider value={{api}}>
        <div>
            <div className="nana">
            <Navbar/>
            </div>
            <div className="outlet">
            <Outlet/>
            </div>
            
            
            <Footer/>
        </div>
        </GlobalContext.Provider>

    )
}
export default Layout