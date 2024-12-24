import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import CubeScene from './scenes/ManyCPUs';
import { useState, useEffect, useRef } from 'react';
import "./App.css";
import ManyCPUsScene from './scenes/ManyCPUs';


const App = () => {

  const scenes = [
    {
      component: <ManyCPUsScene/>,
      title: "Many CPUs (Testauslive 2024)",
      url: "/scene/ManyCPUs",
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
        <Route path="/scene/ManyCPUs" element={<ManyCPUsScene/>}/>
      </Routes>
    </div>
   
    </Router>
  );
};

export default App;
