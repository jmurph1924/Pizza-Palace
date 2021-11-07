import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from '../src/pages/Home'
import Signinpages from './pages/Signinpage';
import Signuppages from './pages/Signuppage';
import Checkoutpage from './pages/Checkoutpage';
import Checkoutpage2 from './pages/Checkoutpage2';
import Checkoutpage3 from './pages/Checkoutpage3';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={Signinpages} exact />
        <Route path='/signup' component={Signuppages} exact />
        <Route path='/checkout' component={Checkoutpage} exact />
        <Route path='/checkout2' component={Checkoutpage2} exact />
        <Route path='/checkout3' component={Checkoutpage3} exact />
      </Switch>
    </Router>
  );
}

export default App;
