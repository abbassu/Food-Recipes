import React, { useEffect, useState } from "react";
import "./filter.css"

function Filter(props){

    const [box1,set_box1]=useState(false)
    const [box2,set_box2]=useState(false)
    const [box3,set_box3]=useState(false)
    const [box4,set_box4]=useState(false)


    useEffect(()=>{
        props.fun([box1,box2,box3,box4])
    },[box1,box2,box3,box4])

    return(
        <div className="filter">
            <button className="fff1">Filter</button>
            <form action="" >
                <div className="box">
                    <div><label htmlFor="">vegetarian</label></div>
                    <div>
                        <input type="checkbox" onChange={()=>{
                            set_box1(!box1)
                        }}/>
                    </div>
                </div>

                <div className="box">
                    <div><label htmlFor="">veryHealthy</label></div>
                    <dir>
                        <input type="checkbox"onChange={()=>{
                            set_box2(!box2)
                        }} />
                    </dir>
                </div>

                <div className="box">
                    <div><label htmlFor="">veryPopular</label></div>
                    <div>
                        <input type="checkbox" onChange={()=>{
                            set_box3(!box3)
                        }}  />
                    </div>
                </div>

                <div className="box">
                    <div><label htmlFor="">Cheap</label></div>
                    <div>
                        <input type="checkbox" onChange={()=>{
                            set_box4(!box4)
                        }} />
                    </div>
                </div>

            </form>
        </div>
    )

}
export default Filter