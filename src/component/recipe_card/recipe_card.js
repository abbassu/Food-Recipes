import React from "react";
import "./recipe_card.css"
import { Link } from "react-router-dom";
function Recipe_card ({recipe}){
    return(
<div>
<Link className="card"  to="/recipe" state={recipe}>
            <p className="title">{recipe.title}</p>
            {   recipe.image ?
                    <img src={recipe.image } alt="" className="responsive" />
                    : 
                    <h2 className="no_photo"> -THERE IS NO PHOTO-  </h2>
            }
        </Link>
</div>

    )
}
export default Recipe_card