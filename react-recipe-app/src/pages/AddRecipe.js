import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/recipes"; // Your JSON Server URL

export default function AddRecipeForm() {
    const [recipeImage, setRecipeImage] = useState(null);
    const [authorImage, setAuthorImage] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleImageChange = (e, setImage) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result); // Display the image preview
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a new recipe object from the form data
        const newRecipe = {
            title: "New Recipe Title", // Replace with actual form values
            image: recipeImage, 
            authorImg: authorImage,
            ingredients: "Example Ingredients", // Example, use actual form data
            instructions: "Example Instructions", // Example, use actual form data
            category: "Dessert", // Example, use actual form data
            preparationTime: 15, // Example, use actual form data
            cookingTime: 30, // Example, use actual form data
            servings: 4, // Example, use actual form data
        };

        try {
            // Post the new recipe to your JSON Server
            const response = await axios.post(API_URL, newRecipe);
            setSuccessMessage("Recipe successfully added!");

            // Redirect to the Recipe List page after successful submission
            setTimeout(() => {
                navigate("/RecipeListPage");
            }, 2000);
        } catch (error) {
            console.error("Error adding recipe:", error);
            setSuccessMessage("Failed to add recipe, please try again.");
        }
    };

    return (
        <div className="recipe-form-container">
            <h2>Add a New Recipe</h2>
            {successMessage && <p>{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="recipe-form-group">
                    <label className="recipe-form-label">Recipe Name</label>
                    <input
                        type="text"
                        className="recipe-form-input"
                        placeholder="Enter recipe name"
                        required
                    />
                </div>
                <div className="recipe-form-group">
                    <label className="recipe-form-label">Recipe Picture</label>
                    <input
                        type="file"
                        className="recipe-form-input"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, setRecipeImage)}
                        required
                    />
                </div>
                <div className="recipe-form-group">
                    <label className="recipe-form-label">Author Picture</label>
                    <input
                        type="file"
                        className="recipe-form-input"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, setAuthorImage)}
                        required
                    />
                </div>
                <div className="form-image-preview">
                    {recipeImage && <img src={recipeImage} alt="Recipe Preview" />}
                    {authorImage && <img src={authorImage} alt="Author Preview" />}
                </div>
                <div className="recipe-form-group">
                    <label className="recipe-form-label">Ingredients</label>
                    <textarea
                        className="recipe-form-textarea"
                        placeholder="List ingredients, separated by commas"
                        required
                    ></textarea>
                </div>
                <div className="recipe-form-group">
                    <label className="recipe-form-label">Instructions</label>
                    <textarea
                        className="recipe-form-textarea"
                        placeholder="Enter preparation instructions"
                        required
                    ></textarea>
                </div>
                <div className="recipe-form-group">
                    <label className="recipe-form-label">Category</label>
                    <select className="recipe-form-select" required>
                        <option value="">Select Category</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Main Course">Main Course</option>
                        <option value="Appetizer">Appetizer</option>
                    </select>
                </div>
                <div className="recipe-form-group">
                    <label className="recipe-form-label">Preparation Time (mins)</label>
                    <input
                        type="number"
                        className="recipe-form-input"
                        placeholder="Enter preparation time"
                        required
                    />
                </div>
                <div className="recipe-form-group">
                    <label className="recipe-form-label">Cooking Time (mins)</label>
                    <input
                        type="number"
                        className="recipe-form-input"
                        placeholder="Enter cooking time"
                        required
                    />
                </div>
                <div className="recipe-form-group">
                    <label className="recipe-form-label">Servings</label>
                    <input
                        type="number"
                        className="recipe-form-input"
                        placeholder="Enter servings"
                        required
                    />
                </div>
                <button type="submit" className="recipe-form-btn">
                    Submit Recipe
                </button>
            </form>
            {/* Button to navigate to Recipe List */}
            <button
                className="go-to-recipes-btn"
                onClick={() => navigate("/RecipeListPage")}
            >
                Go to Recipe List
            </button>
        </div>
    );
}
