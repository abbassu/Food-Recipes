import logo from './logo.svg';
import './App.css';
import React from "react";
import { useEffect, useState } from 'react';
import Recipe_card from './component/recipe_card/recipe_card';
import { BrowserRouter,Routes,Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom';
import Layout from './component/layout/layout';
import Recipes from './component/recipes/recipes';
import Our_Story from './component/ourstory/ourstory';
import Contact_with_us from './component/contactus/contactus';
import Journal from './component/journal/journal';
import Publications from './component/publications/publications';

function App() {

  const [recipes,set_recipes]=useState([])
  const api="429cb1741f054c988a1e7126805a2ac9"
  async function get_data(){
      const apiy=  await fetch(`https://api.spoonacular.com/recipes/random?number=20&apiKey=${api}`)
      const data= await apiy.json()
      set_recipes(data.recipes)
  }
  useEffect(()=>{
    get_data()
  },[])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path='/' element={<Recipes  all_recipes={recipes}/>} />
        <Route path='/story' element={<Our_Story/>} />
        <Route path='/contact' element={<Contact_with_us/>} />
        <Route path='/publications' element={<Publications/>} />
        <Route path='/journal' element={<Journal/>} />
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
