import './RecipeCard.css'
import {useNavigate} from 'react-router-dom'


function RecipeCard ({recipe}){
    const navigate= useNavigate()


    const clickHandler =()=>{
        navigate(`/recipe/${recipe.recipe_id}`)
        }

    return (
        <div className="card">
            <img src={recipe.image_url}/>
            <h2 className='name'>{recipe.recipe_name}</h2>
            <button className='blue-btn' onClick={clickHandler}>See More</button>
        </div>
    )
}

export default RecipeCard