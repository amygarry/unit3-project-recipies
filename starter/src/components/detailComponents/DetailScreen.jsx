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

  return (
    <section>
      <div>
          <div
          style={{
            background: `linear-gradient(
              190deg,
              rgba(0, 0, 0, 0.8),
              rgba(0, 0, 0, 0.8)),
              url(https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale)`,
            backgroundSize: "cover",
          }}
        >
            <div className='banner'>
                <h1 className="recipeName">Pineapple Salmon</h1>
           </div>
          </div>
          <section className='info-section'>
              <div className='recipe-card'>
                  <h2>Recipe</h2>
                  <p>Prep Time: {recipe.prep_time}</p>
                  <p>Cook Time: {recipe.cook_time}</p>
                  <p>Serves: {recipe.serves}</p>
              </div>
              <div className='instruction-card'>
                  <h2>Ingredients</h2>
                  <p>instructions from database</p>
              </div>
          </section>



           
      </div>
    </section>
  );
};

export default DetailScreen;
