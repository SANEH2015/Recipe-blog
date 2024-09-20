import { useState, useEffect } from "react";

export default function RecipeForm({ onSubmit, recipe }) {
    const [name, setName] = useState(recipe ? recipe.name : "");
    const [ingredients, setIngredients] = useState(recipe ? recipe.ingredients : "");
    const [instructions, setInstructions] = useState(recipe ? recipe.instructions : "");

    useEffect(() => {
        if (recipe) {
            setName(recipe.name);
            setIngredients(recipe.ingredients);
            setInstructions(recipe.instructions);
        }
    }, [recipe]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = { name, ingredients, instructions };
        onSubmit(recipe ? recipe.id : null, newRecipe);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Recipe Name" required />
            <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients" required />
            <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions" required />
            <button type="submit">{recipe ? "Update Recipe" : "Add Recipe"}</button>
        </form>
    );
}
