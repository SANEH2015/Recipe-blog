import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard"; // Assuming RecipeCard is the component displaying each recipe

const API_URL = "http://localhost:5000/recipes"; // URL for your JSON Server

export default function RecipeListPage() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        // Fetch recipes from the JSON server
        axios
            .get(API_URL)
            .then((response) => {
                setRecipes(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to fetch recipes. Please try again.");
                setLoading(false);
            });
    }, []);

    return (
        <div className="recipe-list-container">
            <h2>All Recipes</h2>
            {loading ? (
                <p>Loading...</p> // Show loading state while fetching data
            ) : error ? (
                <p>{error}</p> // Show error message if fetching fails
            ) : recipes.length === 0 ? (
                <p>No recipes available.</p> // If there are no recipes
            ) : (
                <div className="recipes-container">
                    {/* Display all recipes using RecipeCard component */}
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            )}
        </div>
    );
}
