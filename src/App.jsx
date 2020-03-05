import React from 'react';
import './App.css';
import Header from './components/Header'
import MainContent from './components/MainContent'
import LeftSide from './components/LeftSide'

function App() {
  return (
    <div>
      <Header />
      <LeftSide />
      <MainContent />
    </div>
  );
}

export default App;