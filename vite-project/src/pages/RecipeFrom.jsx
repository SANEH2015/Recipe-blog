import { useState, useEffect } from "react";

export default function RecipeForm({ onSubmit, recipe }) {
    const [recipes, setRecipes] = useState([]);
    const [formData, setFormData] = useState({
      name: '',
      ingredients: '',
      instructions: '',
      image: null
    });
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Recipe Name" required />
            <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients" required />
            <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions" required />
            <button type="submit">{recipe ? "Update Recipe" : "Add Recipe"}</button>
        </form>
    );
}
