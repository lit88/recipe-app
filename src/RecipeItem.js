import React from "react";
import "./RecipeItem.css"

//a function that creates each recipe listing

function RecipeItem({recipe, deleteHandle}) {
return (
    <tr>
        <td>
            {recipe.name}
        </td>
        <td>
            {recipe.cuisine}
        </td>
        <td>
            <img src={recipe.photo} />
        </td>
        <td className="content_td"><p>{recipe.ingredients}</p></td>
        <td className="content_td"><p>{recipe.preparation}</p></td>
        <td>
            <button name="delete" onClick={deleteHandle}>Delete</button>
        </td>
    </tr>
)
}

export default RecipeItem