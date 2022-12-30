import React, { useState } from "react";
import "./search.css"
function SearchFilter(props){


    const [text,settext]=useState()
    function onChangeInput(value){
        settext(value)
        props.fun(value)
    }



    return(

                <div className="search">
                    <form action="" className="form_in_search">
                        <input type="text" 
                        onChange={(e)=>{
                            onChangeInput(e.target.value)
                        }} />
                        <button className="button_in_search">Search</button>
                    </form>
                </div>

    )
}
export default SearchFilter