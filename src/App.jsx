import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import { Route, BrowserRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


function App(props) {
  return (
    <BrowserRouter>
      <HeaderContainer />

      <Container maxWidth="lg" className='container'>
        <Grid container spacing={3}>

          <Grid item xs={2}>
            <Paper className='paper'>
              <Navbar />
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Route
              path='/profile/:userId?'
              render={() => (<ProfileContainer />)}
            />
            <Route
              path='/dialogs'
              render={() => (<DialogsContainer store={props.store} />)}
            />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/users' render={() => <UsersContainer />} />

          </Grid>

        </Grid>
      </Container>
    </BrowserRouter>
  );
}

export default App;