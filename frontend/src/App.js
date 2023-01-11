import React from 'react'
import Navbar from "./Components/Navbar"
import {BrowserRouter, Routes,route, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Createpost from './pages/Createpost';
import './App.css'
function App() {
  return (
    <BrowserRouter>
    <div>
     <Navbar/>
     <Routes>
       <Route path="/" exact element={<Home/>}/>
       <Route path="Login" exact element={<Login/>}/>
       <Route path="Signup" exact element={<Signup/>}/>
       <Route path="Profile" exact element={<Profile/>}/>
       <Route path="Createpost" exact element={<Createpost/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
