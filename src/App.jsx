import React from 'react';

import Navbar from './Component/Navbar';
import Secondnav from './Component/Secondnav';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import signin from './Component/Signin';
import Orders from './Component/Orders';
import Cart from './Component/Cart';
import Search from './Component/Search';
import Account from "./Component/Account";
import Wishlist from "./Component/Wishlist";


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


        {/*account  Page */}
        <Route path="/account" element={<Account />} />

        {/*wishlist  Page */}
        <Route path="/wishlist" element={<Wishlist />} />

        

        {/*signup  Page */}
        <Route path="/signup" element={<Signup />} />

        {/*signup  Page */}
         <Route path="/signin" element={<Signin />} />


        {/*search  Page */}
        <Route path="/search" element={<Search />} />

      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}