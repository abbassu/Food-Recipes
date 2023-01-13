import React, { useEffect, useState } from "react";
import Recipe_card from "../recipe_card/recipe_card";
import "./recipes.css"
import SearchFilter from "../searchfilter/search";
import Filter from "../filterbox/filter";
import { Link } from "react-router-dom";
import Pagination from "../pagination/pagination";
function Recipes({all_recipes}){

    const [recipes,set_recipes]=useState(all_recipes)



    const [search_text,set_search_text]=useState("")
    const [check_box,set_check_box]=useState([false,false,false,false])
    const array=["vegetarian","veryHealthy","veryPopular","cheap"]
    
    const [currentpage,setcurrentpage]=useState(1)
    const [postsperpage,setpostsperpage]=useState(18)

    const indexoflastpost=currentpage*postsperpage;
    const indexoffirstpost=indexoflastpost-postsperpage;

    const currentrecipes = recipes.slice(indexoffirstpost,indexoflastpost);




    useEffect(()=>{
        set_recipes(all_recipes)
    },[all_recipes])

    useEffect(()=>{

        let _searchtext=search_text.toUpperCase()
        let _recipes= all_recipes.filter((item)=>{
        const _uppercasetitle= item.title.toUpperCase()
            if(_uppercasetitle.includes(_searchtext)){
                return true
            }
            else{
                return false
            }
        })
        console.log("afetr search ",_recipes)
        let  v=[]

        let ss=[]
        {check_box.includes(true) ?

            v= check_box.filter((item,index)=>{
                if(item){
                    let h=index
                    _recipes=  _recipes.filter((item)=>{
                        if(item[array[h]]){
                            console.log("000000000000000")    
                            return true
                        }
                        else return false
                    })

                }

            })
             :
             console.log("g")
            }
            console.log("after boccheck",_recipes)
            console.log("after boccheck",_recipes.length)

        set_recipes(_recipes)
    },[search_text,check_box])


    function onchange_checkbox(value){
        console.log("arra",value)
        set_check_box(value)
    }
    
    function onchangefilter(value){
        set_search_text(value)
    }

    function onclick_card(value){
        <Link  to="/recipe" state={{name:"dddddddd"}} />
    }
    function paginate(value){
        setcurrentpage(value)
    }
   
    
    return(
        <div className="recipes">
            <div className="headerti">
            Recipes
            </div>
            <SearchFilter fun={onchangefilter}/>
            <div className="tabel_for_all_recipes">
            <Filter fun={onchange_checkbox}/>
            <div className="all-food">
            {
                currentrecipes.map((element,index)=>{
                    return(
                        <div key={element.id} onClick={()=>{
                            onclick_card(element)
                        }}>
                            <Recipe_card recipe={element} />
                        </div>
                    )
                })
                
            }  
            </div>
            
            </div >
            {console.log("kkkk",recipes.length)}
            <Pagination poastsperpage={postsperpage} totalposts={recipes.length} paginate={paginate}/>
        </div>
    )

}
export default Recipes