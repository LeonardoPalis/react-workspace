import React from 'react';
import Button from "@material-ui/core/Button"
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { routes } from './routes';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <span>App</span>
          </Route> */}
          {
            routes.map(route => {
              return (
                <Route path={route.path} component={route.component} />
              )
            })
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
