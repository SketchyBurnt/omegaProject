import "../styles/tailwind.css";
import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./index.js"
export default function MyApp({ 
   
}) 
   { 
    return (
      <>
         <Home/>
         <ToastContainer />
      </>
     
    );
  }
  