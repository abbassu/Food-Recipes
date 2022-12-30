import React from "react";
import { nav } from "./utils_nav";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css"
function Navbar(){
    const navigate=useNavigate()
    function to_change_active(e){
        navigate(e)
    }
    console.log("nav",nav)
    return(
        <div className="navbar">
            <h1>Navbar</h1>
            
            <div className="right_nav">
                <ul className="unorder-list">
                    {
                        nav.map((element)=>{
                            return(
                                <li key={element.id} className="">
                                    <div className="div_out_nav" onClick={(e)=>{
                                        to_change_active(element.link)
                                    }}>
                                    {element.title}
                                        {/* <Link to={element.link} 
                                            className={`link_nav`}
                                            
                                            }}>
                                             </Link> */}
                                    </div>

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default Navbar