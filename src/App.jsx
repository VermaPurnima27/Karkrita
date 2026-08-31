import React from 'react'
import Navbar from './Component/Navbar';
import Secondnav from './Component/Secondnav';
import About from './Component/About';
import Footer from './Component/Footer'
// import CategorySection from './Component/CategorySection';

//import Home from './Component/Home';

 //import Signin from './Component/Signin';
//import Signup from './Component/Signup'
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



export default function App() {
  return (
   <>
      <Navbar/>
      <Secondnav/>
      <About/>
      <Footer/>
      {/* <CategorySection/> */}
      
    {/*<Signin/>*/}
      {/*<Signup/>*/}
      {/* {<Home/>} */}
      
    </>
        
      
   
  )
}
