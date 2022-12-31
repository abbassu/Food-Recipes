import React, { useEffect, useState } from "react";
import Recipe_card from "../recipe_card/recipe_card";
import "./recipes.css"
import SearchFilter from "../searchfilter/search";
function Recipes({all_recipes}){




    const [recipes,set_recipes]=useState(all_recipes)
    useEffect(()=>{
        // console.log("aaaaaaaa",all_recipes)
        set_recipes(all_recipes)
    },[all_recipes])
    
    function onchangefilter(value){
        // console.log(value)
        const _searchtext=value.toUpperCase()
        // console.log("_searchtexttttttttttttttttttttt",_searchtext)
        const _recipes= all_recipes.filter((item)=>{
        const _uppercasetitle= item.title.toUpperCase()
            // console.log("_uppercasetitle",_uppercasetitle)
            
            if(_uppercasetitle.includes(_searchtext)){
                // console.log("chatckeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
                return true
            }
            else{
                return false
            }
        })
        set_recipes(_recipes)
    }

    
    return(
        <div className="recipes">

            <div className="filter">
                <form action="">

                </form>
            </div>

            <div className="tabel_for_all_recipes">

            <SearchFilter fun={onchangefilter}/>

            <div className="all-food">
            {console.log("ggggggggggggg")}
            {
                
                recipes.map((element,index)=>{
                    // 
                    return(
                        <div key={element.id}>
                            <Recipe_card recipe={element}/>
                        </div>
                    )
                })
                
            }  
            {
                console.log("aaaaaaaa",recipes)
            }
            </div>

            </div >
        </div>
    )

}
export default Recipes