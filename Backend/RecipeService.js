const API_URL = "http://localhost:3000/recipes";

const getRecipes = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

const addRecipe = async (recipe) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(recipe),
    });
    return response.json();
};

const updateRecipe = async (id, recipe) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(recipe),
    });
    return response.json();
};

const deleteRecipe = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
};

export default { getRecipes, addRecipe, updateRecipe, deleteRecipe };
