import React from 'react';

import Navbar from './Component/Navbar';
import Secondnav from './Component/Secondnav';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import Orders from './Component/Orders';
 import Cart from './Component/Cart';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      {/* Second Navbar */}
      <Secondnav />

      {/* Pages */}
      <Routes>

        {/* Signin Page */}
        <Route path="/signin" element={<Signin />} />

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Orders Page */}
        <Route path="/orders" element={<Orders />} />

          {/*cart  Page */}
        <Route path="/cart" element={<Cart />} />

        

        {/*signup  Page */}
        <Route path="/signup" element={<Signup />} />

      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}