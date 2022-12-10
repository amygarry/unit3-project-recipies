import React, {useState} from "react";
import './NewRecipe.css'
import { Formik } from "formik";

const NewRecipeScreen = () => {

  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const initialValues ={
    type: '',
    recipeName: '',
    imageURL:'',
    prepTime: '',
    cookTime: '',
    serves: '',
    ingredients: [],
    instructions: ''
  }



  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
};

const onSubmit = (values) => {
  values.ingredients = ingredients;
  console.log(values);
};
  return (
    <section className="form-section">
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}
      >{function({values, handleChange, handleSubmit}){
        return(<form onSubmit={handleSubmit}>
          <div className="center">
            <input type="text" placeholder="Name" value={values.recipeName} onChange={handleChange} name='recipeName'/>
            <input type="text" placeholder="image URL"value={values.imageURL} onChange={handleChange} name='imageURL'/>
          </div>
  
          <div className="center">
            <input type="radio" name="type" id="cook" value="cook" onChange={handleChange}/>
            <label htmlFor="cook">Cook</label>
            <input type="radio" name="type" id="drink" value="drink" onChange={handleChange}/>
            <label htmlFor="drink">Drink</label>
            <input type="radio" name="type" id="bake" value="bake" onChange={handleChange}/>
            <label htmlFor="bake">Bake</label>
          </div>
  
          <div className="center">
            <input type="text" placeholder="Prep Time" value={values.prepTime} onChange={handleChange} name='prepTime'/>
            <input type="text" placeholder="Cook Time" value={values.cookTime} onChange={handleChange} name='cookTime'/>
            <input type="text" placeholder="Servers" value={values.serves} onChange={handleChange} name='serves'/>
          </div>
  
          <input type="text" placeholder="Ingredients" value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="text" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
          <button className="orng-btn" onClick={addIngredient}>Add Another Ingredient</button>


          <input type="textarea" placeholder="What are the instructions?"value={values.instructions} onChange={handleChange} name='instructions'/>
          <button className="blue-btn" type="submit">Save</button>
        </form>)
      }}
      
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
