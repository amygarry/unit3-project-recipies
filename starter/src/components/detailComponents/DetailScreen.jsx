import React, {useState, useEffect} from 'react'
import '../homeComponents/AdBanner.css'
import { useParams } from "react-router-dom";
import './Details.css'
import axios from 'axios'


const DetailScreen = () => {  
  const { id } = useParams();
  // The rest of your component...
  const [recipe, setRecipe] = useState({});

  const url = "https://recipes.devmountain.com";
  console.log(recipe);

  useEffect(() => {
    axios
      .get(`${url}/recipes/${id}`)
      .then((res) => {
      setRecipe(res.data);
    });
  }, []);

  console.log(recipe.ingredients)
  // const ingredientsArray = recipe.ingredients
  // console.log(ingredientsArray)
  //At the point above it is an array. Then when I comment back in what is below it becomes undefined why is that? 
  // const ingredientDisplay= ingredientsArray
  // .map((element)=>{
  //   return <p>{element.ingredient_id}</p>
  // })

  // this is the other way I tried that also did not wrok. I tried both arrow and regular function and I tried both invoked and not invoked
  function ingredientDisplay (){
    recipe.ingredients.map((e)=>{
      return <p>e.ingredient_id</p>
    })
  }


  return (
    <section>
      <div>
          <div
          style={{
            background: `linear-gradient(
              190deg,
              rgba(0, 0, 0, 0.8),
              rgba(0, 0, 0, 0.8)),
              url(${recipe.image_url})`,
            backgroundSize: "cover",
          }}
        >
            <div className='banner'>
                <h1 className="recipeName">{recipe.recipe_name}</h1>
           </div>
          </div>
          <section className='info-section'>
              <div className='recipe-card'>
                  <h2 className='card-headers'>{recipe.recipe_name}</h2>
                  <p>Prep Time: {recipe.prep_time}</p>
                  <p>Cook Time: {recipe.cook_time}</p>
                  <p>Serves: {recipe.serves}</p>
                  <h2 className='card-headers extra-margin'>Ingredients</h2>
                  {/* {ingredientDisplay} */}
                    {/* <p>{recipe.instructions}</p> */}
                  {/* I don't understand why the above did not work and the below did */}
                  {/* <p>{ingredientDisplay}</p> */}
                  {recipe.ingredients && recipe.ingredients.map((ing, index) => {
                    return <h4>{ing.quantity} {ing.ingredient}</h4>
                  })}
                  
              </div>
              <div className='instruction-card'>
                  <h2 className='card-headers'>Instructions</h2>
                  <p>{recipe.instructions && JSON.parse(recipe.instructions)}</p>
              </div>
          </section>



           
      </div>
    </section>
  );
};

export default DetailScreen;
