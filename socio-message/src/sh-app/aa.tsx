import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './features/home/screens/HomeScreen';
import './App.css';

function App() {
  console.log('🏁 App component rendered');
  
  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Socio Message</h1>
      </div>
      <div className="list-view-container">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;