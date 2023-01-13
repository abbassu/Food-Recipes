import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./price.css"

function PriceBreakdown({props,how}){

    const [price,set_price]=useState([])
    const [ingredients,set_ingredients]=useState(["",""])

    const apii="429cb1741f054c988a1e7126805a2ac9"
    async function get_price(){
         await fetch(`https://api.spoonacular.com/recipes/${props}/priceBreakdownWidget.json?apiKey=${apii}`)
         .then(res => res.json())
         .then( res => {
            console.log("lala ", res)    
            set_price(res)
            set_ingredients(res.ingredients)
        } )
    }
    useEffect(()=>{
        console.log("price ",price)
    },[price])
    useEffect(()=>{
       get_price()
    },[props])

    return(
        <div className="pricebreakdown">
            
            {
                ingredients.map((element)=>{
                    return(
                        <div className="block_price">
                            <div className="nameoftext">
                            {element.name}
                            </div>
                            <div className="pricevalue">
                            $ {element.price}
                            </div>
                        </div>
                    )
                })
            }
            <div>
                {}
            </div>
            <hr />
            <div className="total">
                Total Cost <span> ${price.totalCost}</span>
            </div>
            
        </div>
    )

}export default PriceBreakdown