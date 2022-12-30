import React from "react";
import "./recipe_card.css"
function Recipe_card ({recipe}){
    // console.log(recipe.title)
    return(
        <div className="card">
            <p className="title">{recipe.title}</p>
            {   recipe.image ?
                    <img src={recipe.image } alt="" className="responsive" />
                    : 
                    <h2 className="no_photo"> There is no photo </h2>
            }
            
        </div>
    
    )
}
export default Recipe_card