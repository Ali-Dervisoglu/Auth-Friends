import React from 'react';
import './App.css';
import Signin from "./components/Signin"
import { BrowserRouter, Link, Route } from "react-router-dom"
import { getToken } from "./utils/getToken"

import FriendsList from "./components/FriendsList";

import ProtectedRoute from "./ProtectedRoute"

import AddFriend from "./components/AddFriend.js";

function App() {
  const signedIn = getToken();

  return (
    <BrowserRouter>
      <nav>
        <Link to="/"> Home </Link>
        {!signedIn && <Link to="/signin"> Sign In </Link>}
        <Link to="/friendslist"> Friends List </Link>
        <Link to="/addfriend"> Add Friend </Link>
      </nav>
      <Route exact path="/signin" component={Signin} />
      <ProtectedRoute exact path="/friendslist" component={FriendsList} />
      <ProtectedRoute exact path="/addfriend" component={AddFriend} />
    </BrowserRouter>
  );
}

export default App;

// yes