import React from 'react';
import Navbar from './Component/Navbar';
import Secondnav from './Component/Secondnav';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Signin from './Component/Signin';
import Signup from './Component/Signup';;
import Orders from './Component/Orders';
import Cart from './Component/Cart';
import Search from './Component/Search';
import Account from "./Component/Account";
import Wishlist from "./Component/Wishlist";
import Category from "./Component/Category";
import ProductDetails from './Component/ProductDetails';
import BestSeller from "./Component/BestSeller";
import NewArrival from "./Component/NewArrival";
import Artisans from "./Component/Artisans";


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

  
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Orders Page */}
        <Route path="/orders" element={<Orders />} />

          {/*cart  Page */}
        <Route path="/cart" element={<Cart />} />
        
        <Route path="/category" element={<Category />} />

        {/*account  Page */}
        <Route path="/account" element={<Account />} />

        {/*wishlist  Page */}
        <Route path="/wishlist" element={<Wishlist />} />

        <Route  path="/product" element={<ProductDetails />} />

        {/*signup  Page */}
        <Route path="/signup" element={<Signup />} />

        {/*signup  Page */}
         <Route path="/signin" element={<Signin />} />

        {/*search  Page */}
        <Route path="/search" element={<Search />} />

        <Route path="/best-sellers" element={<BestSeller  /> }/>

        <Route path="/new-arrivals" element={<NewArrival />} />

        <Route path="/artisans" element={<Artisans />} />


      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}