import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Pixel from './components/Pixel';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';

function App() {
  const [color, setColor] = useState(0);
  
  return (
    <div className="App">
      <ColorPicker 
        currentColor={color} 
        setColor={color => setColor(color)}
      />
      <Canvas currentColor={color}/>
      
    </div>
  );
}

export default App;
