import React, { useEffect } from "react";
import { useState } from "react";
import "./pagi.css"

function Pagination({poastsperpage,totalposts,paginate}){
    const pagenumbers=[]
    const [nums,setnums]=useState([])

    useEffect(()=>{
        console.log("nums",nums)
    },[nums])

    useEffect(()=>{
        console.log("jjjj",totalposts/poastsperpage)
        for(let i=1;i<=Math.ceil(totalposts/poastsperpage);i++){
            console.log(100)
            pagenumbers.push(i)
        }
        console.log("a",pagenumbers)
        setnums(pagenumbers)
    },[totalposts])
    return(
        <div className="pagination">
            <ul className="iio">
                {nums.map((number)=>{
                    return(
                        <li className="page-item" onClick={()=>{
                            paginate(number)
                        }}>
                        {number}
                    </li>
                    )
                })}
            </ul>
        </div>
    )

}export default Pagination