import React, {useState, useEffect} from 'react'
import AdBanner from './AdBanner'
import axios from "axios"
import RecipeCard from './RecipeCard'
import { BiSearchAlt2 } from "react-icons/bi";
import './HomeScreen.css'


const HomeScreen = () => {  

  const [recipes, setRecipies]= useState('')
  const [search, setSearch]=useState('')

  useEffect(()=>{
    axios.get( 'https://recipes.devmountain.com/recipes')
    .then((res)=>{
      console.log(res.data)
      setRecipies(res.data)
    }
    )
  }, [])

  const recipeDisplay = recipes
    .filter((recipe, index) => {
        let title = recipe.recipe_name.toLowerCase()
        let searchParams = search.toLowerCase()
        return title.includes(searchParams)
    })
    .map((recipe, index) => {
        return <RecipeCard recipe={recipe}/>
    })


  return (
    <div>
      <AdBanner />
      <div className='search'>
      <span>
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a Recipe"
          />
      </span>
      <div className='wrap'>
      {/* <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/> */}
      {recipeDisplay ? recipeDisplay : <h2>No Recipes</h2>}
      </div>
      </div>
    </div>
  )
}

export default HomeScreen