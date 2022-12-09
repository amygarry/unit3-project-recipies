import './RecipeCard.css'

function RecipeCard ({recipe}){
    return (
        <div className="card">
            <img src={recipe.image_url}/>
            <h2 className='name'>{recipe.recipe_name}</h2>
            {/* <h2 className='name'>Name</h2> */}
            <button className='blue-btn'>See More</button>
        </div>
    )
}

export default RecipeCard