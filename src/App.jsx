import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <img className='logo-img' src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Wikinews-logo.png" alt="" />
      </header>
      <div className="app-wrapper">
        <nav className="nav block">
          <div><a href="">Profile</a></div>
          <div><a href="">Messages</a></div>
          <div><a href="">News</a></div>
          <div><a href="">Music</a></div>
          <div><a href="">Settings</a></div>
        </nav>
        <div className="main-content block">
          <div>
            <img src="https://pix10.agoda.net/hotelImages/5647641/-1/45ee96c8c2b177ffcd99818b6b6387f0.jpg?s=1024x768" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;