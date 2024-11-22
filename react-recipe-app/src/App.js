import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page Imports
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import Full from "./pages/Full";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import AddRecipe from "./pages/AddRecipe";
import RecipeListPage from "./pages/RecipeListPage";

// Component Imports
import ImproveSkills from "./components/ImproveSkills";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/recipe/:id" element={<Full />} />
          <Route path="/AddRecipe" element={<AddRecipe />} />
          <Route path="/RecipeListPage" element={<RecipeListPage />} />

          {/* Authentication Pages */}
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Additional Features */}
          <Route path="/improve-skills" element={<ImproveSkills />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
