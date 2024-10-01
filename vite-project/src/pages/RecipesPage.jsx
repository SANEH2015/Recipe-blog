import { useState } from "react";
import Footer from "../componet/footer";
import { Link } from 'react-router-dom';

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        ingredients: '',
        instructions: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = {
            name: formData.name,
            ingredients: formData.ingredients,
            instructions: formData.instructions,
            image: URL.createObjectURL(formData.image)
        };
        setRecipes([...recipes, newRecipe]);
        setFormData({ name: '', ingredients: '', instructions: '', image: null });
    };

    return (
        <>
            <div className="bg-green-300 w-full flex">
                <div className="logo">
                    <h1 className="text-6xl mb-24">
                        <span className="text-green-700 font-serif">X</span>COOKING
                    </h1>
                </div>
                <nav className="flex justify-around w-1/4 ml-auto mt-5">
                    <Link to="/" className="text-black text-xl no-underline">Home</Link>
                    <Link to="/blog" className="text-black text-xl no-underline">Blog</Link>
                    <Link to="/about" className="text-black text-xl no-underline">About</Link>
                    <Link to="/contact" className="text-black text-xl no-underline">Contact</Link>
                </nav>
            </div>

            {/* Centering the form and submitted recipes */}
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h3 className="text-center text-xl mb-5 font-serif">SUBMIT YOUR RECIPE</h3>
                <form onSubmit={handleSubmit} className="mb-10 w-1/2">
                    <div className="flex flex-col items-center">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Recipe Name"
                            required
                            className="border border-gray-300 p-2 mb-2 rounded w-full"
                        />
                        <input
                            type="text"
                            name="ingredients"
                            value={formData.ingredients}
                            onChange={handleChange}
                            placeholder="Ingredients"
                            required
                            className="border border-gray-300 p-2 mb-2 rounded w-full"
                        />
                        <textarea
                            name="instructions"
                            value={formData.instructions}
                            onChange={handleChange}
                            placeholder="Instructions"
                            required
                            className="border border-gray-300 p-2 mb-2 rounded w-full"
                        />
                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            accept="image/*"
                            required
                            className="border border-gray-300 p-2 mb-2 rounded w-full"
                        />
                        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded mt-2">Submit Recipe</button>
                    </div>
                </form>

                <h3 className="text-center text-xl mb-5 font-serif">SUBMITTED RECIPES</h3>
                <div className="flex flex-col items-center">
                    {recipes.map((recipe, index) => (
                        <div key={index} className="border border-gray-300 p-4 rounded-lg shadow-md mb-2 w-1/2">
                            <h4 className="text-lg font-bold">{recipe.name}</h4>
                            <img src={recipe.image} alt={recipe.name} className="w-full h-36 rounded mb-2 object-cover" />
                            <p className="text-sm"><strong>Ingredients:</strong> {recipe.ingredients}</p>
                            <p className="text-sm"><strong>Instructions:</strong> {recipe.instructions}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
