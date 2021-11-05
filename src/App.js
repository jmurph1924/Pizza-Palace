import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from '../src/pages/Home'
import Signinpages from './pages/Signinpage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={Signinpages} exact />
      </Switch>
    </Router>
  );
}

export default App;
