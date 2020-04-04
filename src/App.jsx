import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import { Route, BrowserRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Profile from './components/Profile/Profile';


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Route
          path='/profile'
          render={() => (<ProfileContainer />)}
        />
        <Route
          path='/profile'
          render={() => (<Profile store={props.store} />)}
          exact
        />
        <Route
          path='/dialogs'
          render={() => (<DialogsContainer store={props.store} />)}
        />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
        <Route path='/users' render={() => <UsersContainer />} />
      </div>
    </BrowserRouter>
  );
}

export default App;