import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import CubeScene from './Scenes/CubeScene';
import { useState, useEffect, useRef } from 'react';
import "./App.css";


const App = () => {

  const scenes = [
    {
      component: <CubeScene/>,
      title: "Cube",
      url: "/scene/Cube",
    }, 
  ];


  return (
  <Router>

    <div id='panel'>
      <div id='header'>
      <img src="/TestausserveriLogo.bdcdaa3b.svg" alt="Logo"/>
      </div>
      <div id="scenes">
        {scenes.map((scene,index) => {
          return (
            <div key={index} className="scene-item">
              <Link to={scene.url}>{scene.title}</Link>
            </div>
          )
        })}
      </div>
    </div>
     
    <div className='canvas-container'>
      <Routes>
        <Route path="/scene/cube" element={<CubeScene/>}/>
      </Routes>
    </div>
   
    </Router>
  );
};

export default App;
