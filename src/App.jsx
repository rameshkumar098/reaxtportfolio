import React from 'react';
import Navbar from "./component/Navbar";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx"
import Portfolio from './component/Portfolio.jsx';
import Experience from './component/Experience.jsx';
import Footer from './component/Footer.jsx';
import Contact from './component/Contact.jsx';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App

