import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homePage.jsx";
import About from "./Pages/about.jsx";
import Contact from "./Pages/contact.jsx";
import Policy from "./Pages/policy.jsx";
import PageNotFound from "./Pages/pageNotFound.jsx";
import Register from "./Pages/Auth/Register.jsx";
import Login from "./Pages/login.jsx";
import Cart from "./Pages/cart.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

