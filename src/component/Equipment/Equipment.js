import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./equipment.css"
function Equipment({props}){

    const mySet1 = new Set()
    const mySet2 = new Set()
    const [arr,set_arr]=useState([])
    const [arr_name,set_arr_name]=useState([])

    useEffect(()=>{
        {props.map((element)=>{
            element.equipment.map((element2)=>{
                mySet1.add(element2.image)
                mySet2.add(element2.name)
            })
        })}
        let _arr=[...mySet1]
        let _arr2=[...mySet2]
        set_arr_name(_arr2)
        set_arr(_arr)
    },[props])

    useEffect(()=>{

    },[mySet1])

    return(
        <div className="equipment">
            {arr.map((element,index)=>{
                return(
                    <div className="equi">
                        <img src={`https://spoonacular.com/cdn/equipment_100x100/${element}`} alt="" />
                        <span className="name-eq"> {arr_name[index]} </span>
                    </div>
                )
            })}
        </div>
    )
}
export default Equipment