import logo from './logo.svg';
import './App.css';
import React from "react";
import { useEffect, useState,useContext } from 'react';
import Recipe_card from './component/recipe_card/recipe_card';
import { BrowserRouter,Routes,Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom';
import Layout from './component/layout/layout';
import Recipes from './component/recipes/recipes';
import Our_Story from './component/ourstory/ourstory';
import Contact_with_us from './component/contactus/contactus';
import Journal from './component/journal/journal';

import Recipe from './component/recipe/recipe';
import { GlobalContext } from './component/utils/utils';

function App() {

  const [recipes,set_recipes]=useState([])
  const auth=useContext(GlobalContext).api
  const apii="429cb1741f054c988a1e7126805a2ac9"
  async function get_data(){
      // const apiy=  await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${apii}`)
      // const data= await apiy.json()
      // set_recipes(data.recipes)
      // console.log("dddddddddddd",data.recipes)

      fetch(`https://api.spoonacular.com/recipes/random?number=100&apiKey=${apii}`)
      .then( res => res.json() )
      .then ( res => {
      console.log("res",res.recipes)
      set_recipes(res.recipes) } )

  }
  useEffect(()=>{
    console.log("auth",auth)
    get_data()

  },[])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path='/' element={<Journal/>} />
        <Route path='/recipes' element={<Recipes  all_recipes={recipes}/>} />
        <Route path='/story' element={<Our_Story/>} />
        <Route path='/contact' element={<Contact_with_us/>} />

        
        <Route path="/recipe" element={<Recipe/>}/>
      </Route>
    )
  )
return(
  <div>
  <RouterProvider router={router} />
</div>
)
}

export default App;
