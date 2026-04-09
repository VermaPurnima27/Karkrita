import React from 'react'
import Navbar from './Component/Navbar';
//import Home from './Component/Home';
import Signin from './Component/signin';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
   <>
      <Navbar/>
      
      {<Signin/>}
    </>
        
      
   
  )
}
