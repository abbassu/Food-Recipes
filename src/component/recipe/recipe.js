import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../utils/utils";
import { useContext } from "react";
import "./recipe.css"
import Ingredients from "../Ingredients/Ingredients";
import Equipment from "../Equipment/Equipment";
import Steps from "../steps/steps";
import PriceBreakdown from "../PriceBreakdown/PriceBreakdown";

function Recipe(){
    const data =useLocation()
    const [grid,set_grid]=useState(false)
    const [amount,set_amount]=useState(1)
    const [information,set_information]=useState()
    // console.log("location : ",data.state)
    const auth=useContext(GlobalContext).api;
    // async function get_data_from_id(){
    //     const apiy =await fetch(`https://api.spoonacular.com/recipes/${data.state.id}/information?apiKey=${auth}`)
    //     const _information= await apiy.json()
    //     set_information(_information)
    // }
    // console.log(data.state.summary)
    useEffect(()=>{
        // console.log("{auth}",{information})
    },[])

    function count_up(){

        let t=amount+1
        if (t<6)
        set_amount(t)
    }
    function count_down(){
        let t=amount-1
        if (t>0)
        set_amount(t)
    }


    return(
        <div className="recip-in-page">
            <div className="div-in-image">
                <div className="text-in-recip" >
                    {data.state.title}
                </div>
                <img src={data.state.image} alt=""  className="imim"/>
                {/* {data.state.veryHealthy?
                    <div className="smallcard hh">
                        <img src="./image/protein.svg" alt="" />
                        healthy
                    </div> : "" } */}
            </div>


            <div className="awsome">
                <div className="smallcard">
                    <img src="./image/cheap.svg" alt="" />
                    <div>
                        ${data.state.pricePerServing} per serving
                    </div>
                </div>
                <div className="smallcard">
                    <img src="./image/popular.svg" alt="" />
                    <div>
                        {data.state.aggregateLikes} likes
                    </div>
                </div>
                <div className="smallcard">
                    <img src="./image/fast.svg" alt="" />
                    <div>
                    Ready in {data.state.readyInMinutes} minutes
                    </div>
                </div>
            </div>
            <div>
               
            <div dangerouslySetInnerHTML={{ __html : data.state.summary }} className="para"></div>
            <div className="parent-para" >
                <span>
                Instruction
                </span> 
                
                <div dangerouslySetInnerHTML={{ __html : data.state.instructions }} className="para1">
            </div>
            </div>
            </div>

            <div className="text-in-ngredients"> Ingredients  </div>
            <div className="change">
                    <button onClick={count_down} className="bb">Down</button>
                    <div className="amount-in">{amount}</div>
                    <button onClick={count_up} className="bb">Up</button>
                    <div className="Biggest"> Biggest number 5 </div>
            </div>

            <div className="int2">
                    {data.state.extendedIngredients.map((element)=>{
                        return(
                            <Ingredients props={element} how={amount}/>
                        )
                    })}
            </div>

            <div className="text-in-ngredients"> Equipment  </div>
            <div className="int2">
            <Equipment props={data.state.analyzedInstructions[0].steps} />
            </div>


            <div className="text-in-ngredients"> Steps  </div>
            <div className="Ingredients">
            <Steps props={data.state.analyzedInstructions[0].steps} />
            </div>

            <div className="text-in-ngredients"> Price Breakdown  </div>
            <div className="Ingredients">
            <PriceBreakdown props={data.state.id} how={amount} />
            </div>

        </div>
    )
}

Recipe.contextType=GlobalContext
export default Recipe
