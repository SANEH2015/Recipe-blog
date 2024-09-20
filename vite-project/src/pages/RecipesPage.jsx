import { useEffect, useState } from "react";

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [editingRecipe, setEditingRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            const data = await recipeService.getRecipes();
            setRecipes(data);
        };
        fetchRecipes();
    }, []);

    const handleAdd = async (recipe) => {
        const newRecipe = await recipeService.addRecipe(recipe);
        setRecipes([...recipes, newRecipe]);
    };

    const handleDelete = async (id) => {
        await recipeService.deleteRecipe(id);
        setRecipes(recipes.filter(recipe => recipe.id !== id));
    };

    const handleEdit = (recipe) => {
        setEditingRecipe(recipe);
    };

    const handleUpdate = async (id, updatedRecipe) => {
        const newRecipe = await recipeService.updateRecipe(id, updatedRecipe);
        setRecipes(recipes.map(recipe => (recipe.id === id ? newRecipe : recipe)));
        setEditingRecipe(null);
    };

    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map(recipe => (
                <div key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    <button onClick={() => handleEdit(recipe)}>Edit</button>
                    <button onClick={() => handleDelete(recipe.id)}>Delete</button>
                </div>
            ))}
            <RecipeForm onSubmit={editingRecipe ? handleUpdate : handleAdd} recipe={editingRecipe} />
        </div>
    );
}
