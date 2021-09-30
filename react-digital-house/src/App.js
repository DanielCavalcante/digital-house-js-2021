import React from 'react'
import DateNow from './components/DateNow'
import Father from './components/Father'
import StateFul from './components/StateFul'
import Calc from './components/Calc'
import CalcHooks from './components/CalcHooks'
import Pokes from './components/Pokes'
import Poke from './components/Poke'
import About from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/pokes/:poke">
          <Poke />
        </Route>
        <Route path="/pokes">
          <Pokes />
        </Route>
      </Switch>
    </Router>
      // <h1>Hello, Xuxinha</h1>
      // <DateNow />
      // <Father name="Xuxinha" lastName="Souza"></Father>
      // <StateFul />
      // <Calc />
      // <CalcHooks />
  )
}

export default App;
