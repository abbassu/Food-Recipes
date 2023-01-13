import React from "react";

function Ingredients({props,how}){

    return(
        <div>
            <div className="card_ingredients">
                <span className="name-type2">
                    {how < 5 ? Math.ceil( props.amount*how ): Math.ceil( props.amount*5)  }
                    { props.measures.metric.unitShort }
                </span>
                <img src={`https://spoonacular.com/cdn/ingredients_100x100/${props.image}`} alt="" />
                <div className="name-type1">
                    {props.name}
                </div>
            </div>
        </div>
    )


}export default Ingredients