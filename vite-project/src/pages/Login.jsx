import { useState } from "react";
import Footer from '../componet/footer';
import { Link } from 'react-router-dom';
import Leave from '../assets/leaves.png'
import HomePage from "./HomePage";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform login logic here
      console.log("Email:", email);
      console.log("Password:", password);
    };
  
  return (
    <div className="flex flex-col items-center p-5">
      <div className="bg-green-300 w-full flex">
        <div className="logo">
          <h1 className="text-6xl mb-24">
            <span className="text-green-700 font-serif">X</span>COOKING
          </h1>
        </div>
        <nav className="flex justify-around w-1/4 ml-auto mt-5">
          <Link to="../HomePage" className="text-black text-xl no-underline">Home</Link>
          <Link to="/blog" className="text-black text-xl no-underline">Blog</Link>
          <Link to="/RecipesPage" className="text-black text-xl no-underline">Recipes</Link>
          <Link to="/about" className="text-black text-xl no-underline">About</Link>
          <Link to="/contact" className="text-black text-xl no-underline">Contact</Link>
        </nav>
      </div>

      <div className="flex min-h-screen bg-white-900 text-gray-100">
      <div className="flex flex-col items-center justify-center flex-grow p-24">
        <div className="bg-gray-100 rounded-lg shadow-md p-8 w-full max-w-md">
          <div className="flex items-center justify-center mb-6">
          <img src={Leave} className="w-14 inline" alt="Leaves" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Welcome Back</h2>
          <p className="text-gray-700 mb-6">Please log in to your account.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@company.com"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="••••••••"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm font-medium text-gray-900">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <Link to='../HomePage'>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            </Link>
           
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">
                or
              </p>
              <button
                type="button"
                className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in with Google
              </button>
              <p className="mt-2 text-sm text-gray-500">
                New Cookerlover? <a href="/Register" className="text-blue-600 hover:underline">
                  Create Account
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden md:flex flex-1 items-center justify-center bg-white-800 p-24">
        <div className="w-full max-w-md">
          <img src={Leave} alt="Coffee Illustration" />
          <p className="text-gray-100 text-center mt-6">
            Find the best coffee to accompany your days.
          </p>
        </div>
      </div>
    </div>
      
      <Footer />
    </div>
  );
}
