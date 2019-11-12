import React from 'react';
import Login from "./components/Login"
import {Link, Route, withRouter} from "react-router-dom";
import {getToken} from "./helpers/api";
import Friends from "./components/Friends";
import ProtectedRoute from "./components/ProtectedRoute";
import AddFriend from "./components/AddFriend"

import './App.css';

function App() {
  const signedIn = getToken();
  return (
    <div className="App">
      <Link to="/">Home</Link>
      {!signedIn && <Link to="/login">Login</Link>}
      {signedIn && <Link to="/friends">My Friends</Link>}
      {signedIn && <Link to="/logout">Logout</Link>}
      <h1>Welcome!</h1>
      <h3>Please sign in</h3>

      <Route exact path ="/login" component={Login}/>
      <ProtectedRoute exact path="/friends" component={Friends}/>
      <ProtectedRoute exact path='/addfriend' component={AddFriend} />

    </div>
  );
}

export default withRouter(App);
