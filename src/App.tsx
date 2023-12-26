import React from 'react';
import './App.css';
import FightScreen from './components/FightScreen';
import StartScreen from './components/StartScreen';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/undertale-portfolio" element={<StartScreen />} />
      <Route path="/undertale-portfolio/fight" element={<FightScreen />} />
    </Routes>
  );
}

export default App;
