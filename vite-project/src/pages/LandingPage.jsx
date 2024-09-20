import React from 'react';

export default function LandingPage() {
  return (
    <div 
      className="hero bg-base-200 min-h-screen hero-background" 
      style={{ 
        backgroundImage: 'url(https://img.freepik.com/premium-photo/ingredients-cooking-food-background-with-herbs-vegetables-top-view-white-background_1040174-1574.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}
    >
      <div className="hero-content flex items-center justify-center h-full">
        <div className="text-center max-w-md">
          <h1 className="text-8xl font-bold text-green-300 mt-40">Welcome</h1>
          <p className="py-6 text-3xl">
            Are you a home cook and you want to start your food recipes profile this is the perfect
            app for you,This app allow you to post,edit,delete your recipes.
          </p>
          <a href="/Login">
            <button className="btn bg-blue-500 text-white hover:bg-blue-700 py-3 px-6 rounded-lg">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
