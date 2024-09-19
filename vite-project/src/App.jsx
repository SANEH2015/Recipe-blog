import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import BlogPage from './pages/BlogPage';
import RecipesPage from './pages/RecipesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css'
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          <Route path="/RecipesPage" element={<RecipesPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>
    </Router>
  );
}



export default App;