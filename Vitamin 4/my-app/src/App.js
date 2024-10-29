import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import NotHome from './pages/NotHome/NotHome';
import './App.css';

const MyWebsite = () => <h2>My Website Yay!</h2>

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MyWebsite />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nothome" element={<NotHome />} />
      </Routes>
    </div>
  );
}

export default App;
