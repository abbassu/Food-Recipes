import React from "react";
import "./step.css"
function Steps({props}){

    return(
        <div className="stepss">
            <ol>
                
            
            {props.map((element)=>{
                return(
                    <li className="liinsteps">
                        {element.step}
                        
                    </li>
                )
                
            })}
            </ol>
        </div>
    )


}export default Steps