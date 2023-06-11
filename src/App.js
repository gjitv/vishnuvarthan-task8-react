import { useState } from 'react';
import './App.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';

function App() {
  const[currentForm, setCurrentForm]= useState("login");
  const toggleForm=(formName)=>{
    setCurrentForm(formName);
  }
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path="/login" element={
              currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register/>
            }/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>   
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
