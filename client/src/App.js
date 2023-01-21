import React from 'react';
import NavBar from './components/Navbar';
import "./App.css"

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import SignUp from './components/screens/Signup';
import Profile from './components/screens/Profile';
import CreatePost from './components/screens/CreatePost';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/profile' element = {<Profile/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/signup' element = {<SignUp/>} />
        <Route path='/create' element = {<CreatePost/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
