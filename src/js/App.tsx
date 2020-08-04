import React from 'react';
import '../css/App.sass';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'
import Index from './views/index'

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Index}/>
    </Switch>
  </Router>
)

export default App;
