import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home.js";
import AboutUs from "./pages/AboutUs/AboutUs.js";
import ContactUs from "./pages/ContactUs/ContactUs.js";
import Services from "./pages/Services/Services.js"
import Solutions from "./pages/Solutions/Solutions.js"
import MarketVerticals from "./pages/MarketVerticals/MarketVerticals.js"
import Blogs from "./pages/Blogs/Blogs.js"
import Products from "./pages/Products/Products.js"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/marketverticals" element={<MarketVerticals />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/products" element={<Products/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
