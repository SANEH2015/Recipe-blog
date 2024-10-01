import React, { useState } from 'react';
import Image from '../assets/Beautiful plating_ Love the stripe_.jfif';
import { Link } from 'react-router-dom';
import Main from '../assets/f856f3a58991d5bc71ba418947895d3a.jpg';
import Desert from '../assets/White Chocolate Mousse & Coconut Mousse With Yuzu Jelly And Coconut Meringue Recipe _ The Feedfeed.jfif';
import Quality from '../assets/food-safety.png';
import Ingredient from '../assets/ingredient.png';
import Chef from '../assets/chef.png';
import Recipe from '../assets/cooking.png';
import Leave from '../assets/leaves.png';
import Footer from '../componet/footer';
import Starter from '../assets/Beautiful plating_ Love the stripe_.jfif';
import login from '../assets/login.png';
import register from '../assets/add.png';

export default function HomePage() {
  const [likes, setLikes] = useState([0, 0, 0]);
  const [dislikes, setDislikes] = useState([0, 0, 0]);
  
  const [recipes, setRecipes] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    image: null
  });

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index]++;
    setLikes(newLikes);
  };

  const handleDislike = (index) => {
    const newDislikes = [...dislikes];
    newDislikes[index]++;
    setDislikes(newDislikes);
  };

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
    <div className="flex flex-col items-center p-5">

      <div className="bg-green-300 w-full h-full flex">
        <div className="logo">
          <h1 className="text-6xl mb-24">
            <span className="text-green-700 font-serif">X</span>COOKING
          </h1>
        </div>
        <nav className="flex justify-around w-1/4 ml-auto mt-5">
          <Link to="/HomePage" className="text-black text-xl no-underline">Home</Link>
          <Link to="/blog" className="text-black text-xl no-underline">Blog</Link>
          <Link to="/RecipesPage" className="text-black text-xl no-underline">Recipes</Link>
          <Link to="/about" className="text-black text-xl no-underline">About</Link>
          <Link to="/contact" className="text-black text-xl no-underline">Contact</Link>
          <Link to="Register" className="text-black text-xl no-underline"><img src={register} style={{ width: "35px" }} alt="" /></Link>
          <Link to="/Login" className="text-black text-xl no-underline"><img src={login} style={{ width: "35px" }} alt="" /></Link>
        </nav>
      </div>

      <div className="flex justify-center mb-5 mt-10">
        <div className="text-center mx-5">
          <h2 className="text-6xl text-green-600 font-serif">SIMPLE AND</h2>
          <h2 className="text-6xl text-green-600 font-serif">TASTY RECIPES</h2>
          <p className="text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim eu nunc.</p>
          <p className="text-3xl">Nullam ut euismod ex. Suspendisse bibendum bibendum lectus.</p>
          <p className="text-3xl">Pellentesque volutpat tincidunt.</p>
          <Link to={'RecipesPage'}>  <button className="bg-green-600 text-white px-4 py-2 rounded mt-5 cursor-pointer">Get Started</button></Link>
        
        </div>
        <div className="mx-5">
          <img src={Image} alt="food image" className="w-96 h-96" />
        </div>
      </div>

      <h3 className="text-center text-xl mb-5">
        <img src={Leave} className="w-14 inline" alt="Leaves" />
      </h3>
      <h3 className="text-center text-xl mb-5 font-serif">OUR RECIPES</h3>

      <div className="flex justify-center mb-5">
        {['Starter', 'Main', 'Desert'].map((title, index) => (
          <div key={index} className="w-64 mx-5 p-5 border border-gray-300 rounded-lg shadow-md">
            <img src={index === 0 ? Starter : index === 1 ? Main : Desert} alt={title} className="w-full h-36 rounded-t-lg object-cover" />
            <h2 className="text-xl">{title}</h2>
            <div className="flex items-center mt-2">
              {/* Rating Stars */}
              {[...Array(5)].map((_, starIndex) => (
                <svg
                  key={starIndex}
                  className={`w-5 h-5 ${starIndex < 4 ? 'text-yellow-500' : 'text-gray-400'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 15l-5.878 3.09 1.118-6.516L0 6.545l6.618-.962L10 0l2.382 5.583L20 6.545l-5.24 4.027 1.118 6.516z" />
                </svg>
              ))}
            </div>
            <div className="flex mt-2">
              <button className="flex items-center mr-3" onClick={() => handleLike(index)}>
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18l-6-6h4V2h4v10h4l-6 6z" />
                </svg>
                <span className="ml-1">{likes[index]}</span>
              </button>
              <button className="flex items-center" onClick={() => handleDislike(index)}>
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2l6 6h-4v10H10V8H6l4-6z" />
                </svg>
                <span className="ml-1">{dislikes[index]}</span>
              </button>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded mt-2 cursor-pointer">Learn more</button>
          </div>
        ))}
      </div>

      <h3 className="text-center text-xl mb-5 font-serif">OUR AWESOME SERVICES</h3>
      <div className="grid grid-cols-2 gap-4 justify-center mb-5">
        {[
          { img: Quality, title: 'Quality Food' },
          { img: Ingredient, title: 'Ingredients' },
          { img: Chef, title: 'Cook like a chef' },
          { img: Recipe, title: 'Easy Recipes' },
        ].map((service, index) => (
          <div key={index} className="flex items-center p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <img src={service.img} alt={service.title} className="w-16 h-16 rounded-full object-cover" />
            <div className="flex flex-col justify-center text-center mx-3">
              <span className="text-lg font-bold text-gray-800">{service.title}</span>
              <p className="text-sm text-gray-600">Search 2 million recipes using keywords,<br /> 20 nutrients and 40 diet and health filters</p>
            </div>
          </div>
        ))}
      </div>

     
      <Footer />
    </div>
  );
}
 