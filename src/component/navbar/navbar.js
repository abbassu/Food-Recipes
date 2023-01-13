import React from "react";
import { nav } from "./utils_nav";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css"
import { useState } from "react";
function Navbar(){

    const navigate=useNavigate()
    const [bars1,seet_bars1]=useState(false)
    const [b,set_b]=useState(false)

    const [arrnav,setarrnav]=useState(nav)


    function to_change_bars(){
        console.log(bars1)
        set_b(true)
        seet_bars1(!bars1)
    }

    function to_change_active(e){

        console.log(e)

        let _nav= arrnav.map((element)=>{
            if(element.link===e)element.active=true
            else{
                element.active=false
            }
            // console.log(element.active)
        })
        console.log("----------------------")
        let _nav1= arrnav.map((element)=>{
            console.log(element.active)
        })
        // setarrnav(_nav)
        seet_bars1(false)
        navigate(e)
    }
   
    return(

        <div className="navbar nnn">
            <div className="iioo"><i class="fa-solid fa-utensils fa-3x"> . R e c i p e</i></div>
            <div className="right_nav">
                <ul className={`unorder-list  ${bars1 ? "true" :"false" } `}>
                    {
                        arrnav.map((element)=>{
                            return(
                                <div>
                                    <li key={element.id} className={`${element.active? "acac" : "" }`}>
                                        <div className= {`div_out_nav `} onClick={(e)=>{
                                            to_change_active(element.link)
                                        }}>
                                        {element.title}
                                        </div>
                                    </li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default Navbar