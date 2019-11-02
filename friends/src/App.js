import React from 'react';
import './App.css';
import Signin from "./components/Signin"
import { BrowserRouter, Link, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/signin"> Sign In </Link>
      </nav>
      <Route exact path="/signin" component={Signin} />
      </BrowserRouter>
  );
  }

  export default App;
