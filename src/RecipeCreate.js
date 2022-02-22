import React, { useState } from "react";
import "./RecipeCreate.css"

function RecipeCreate({recipes, setRecipes}) {
// create an empty object for a recipe
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }
// useState to hold the data from the form
  const [formData, setFormData]= useState({...initialFormState})
// a function to update each change
  const changeHandle = ({target})=> {
    setFormData({...formData, [target.name]: target.value})
  }
// a submit function that adds the new recipe to the existing array and deletes the form
  const submitHandle = (event)=> {
    event.preventDefault()
    setRecipes([...recipes, formData])
    setFormData({...initialFormState})
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  // return a form with name, onChange and value for each input
  return (
    <form name="create" onSubmit={submitHandle}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"          
                type="text"
                placeholder="Name"
                onChange={changeHandle}
                value={formData.name}
              />    
            </td>
            <td>
              <input
                name="cuisine"    
                type="text"
                placeholder="Cuisine"
                onChange={changeHandle}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                name="photo"         
                type="url"
                placeholder="URL"
                onChange={changeHandle}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                placeholder="Ingredients"  
                onChange={changeHandle}
                value={formData.ingredients}
              >
              </textarea>
            </td>
            <td>
              <textarea
                name="preparation"
                placeholder="Preparation" 
                onChange={changeHandle}  
                value={formData.preparation}
              >
              </textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
