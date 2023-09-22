import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/navBar/NavBar';
//import SideBar from './components/sidebar/SideBar';
import Home from './pages/home/Home'
import Drawing from './pages/drawing/Drawing'
import Details from './pages/details/Details'
import Painting from './pages/painting/Painting'
import Sculpture from './pages/sculpture/Sculpture'
import About from './pages/about/About'
import Misc from './pages/misc/Misc';
import Sketchbook from './pages/sketchbook/Sketchbook';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="june-portfolio" element={<Home />} />
        <Route path="/drawing" element={<Drawing />} />
        <Route path='/drawing/:id' element={<Details />} />
        <Route path="/painting" element={<Painting />} />
        <Route path="/sculpture" element={<Sculpture />} />
        <Route path='/about' element={<About />} />
        <Route path='/misc' element={<Misc />} />
        <Route path='/sketchbook' element={<Sketchbook />} />
      </Routes>
    </Router>
  );
}

export default App;
