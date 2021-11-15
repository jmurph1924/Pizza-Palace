import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from '../src/pages/Home'
import Signinpages from './pages/Signinpage';
import Signuppages from './pages/Signuppage';
import Checkoutpage from './pages/Checkoutpage';
import Loggedinpage from './pages/Loggedinpage';
import Receiptpage from './pages/Receiptpage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={Signinpages} exact />
        <Route path='/signup' component={Signuppages} exact />
        <Route path='/checkout' component={Checkoutpage} exact />
        <Route path='/loggedin' component={Loggedinpage} exact />
        <Route path='/receipt' component={Receiptpage} exact />
      </Switch>
    </Router>
  );
}

export default App;
