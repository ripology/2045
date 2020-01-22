import React from "react";
import NavBar from "./Components/NavBar";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./Components/Profile";
import Characters from "./Components/Characters"
import Home from './Components/Home'
import history from "./utils/history";
import PrivateRoute from './Components/PrivateRoute'
import './App.css'
import PageOne from "./Pages/PageOne"
import PageTwo from "./Pages/PageTwo"


function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
         <div className="NavBar"><NavBar/></div> 
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/one" component={PageOne}/>
          <Route exact path="/two" component={PageTwo}/>
          <PrivateRoute exact path="/characters" component={Characters}/>
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;