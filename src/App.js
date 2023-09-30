import React, { useState } from 'react'
import './App.css';
import { Navbar } from './MyComponents/Navbar';
import { Textform } from './MyComponents/Textform'
import { Aleart } from './MyComponents/Aleart';
import { About } from './MyComponents/About';

//import { Footer } from './MyComponents/Footer';
//import { Textform } from './MyComponents/Textform';
//import Data from "./Context/Data"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {

  //state for mode
  const [darkmode, setDarkmode] = useState("light");

  //state for button name
  const [btnnm, setBtnnm] = useState("Enable Dark mode");

  //state for alert
  const [alert, setAlert] = useState(null);

  //function for showing alert on chnages
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  //changing mode function

  const cgmode = () => {
    if (darkmode === 'light') {
      setDarkmode('dark');
      document.body.style.backgroundColor = '#5A5A5A';
      setBtnnm("Enable Light mode");
      showalert("Dark mode is enebled", "Success  ");
    }
    else {
      setDarkmode('light');
      document.body.style.backgroundColor = 'white';
      setBtnnm("Enable Dark mode");
      showalert("Light mode is enebled", "Success  ");
    }
  }
  return (
    
      <>
      <Router>
      
        <Navbar title="Text-Utils" about="About-Us" mode={darkmode} cgmode={cgmode} btnnm={btnnm} />
        <Aleart alert={alert} />

        <Routes>
        
          <Route exact path="/about" element={<About/>}/>
          

          <Route exact path="/" element={<Textform showalert={showalert} />}/>
        
      
       
        </Routes>
        </Router>
         </>
  );
}

export default App;


/*
    <Data>
      <div>
      <Navbar title="Text-Utils" about="About-Us"/>
      </div>
  
    
   <Textform/>
   
   <Footer/>
  </Data>*/