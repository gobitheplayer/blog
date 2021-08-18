import React from "react"
import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Add from './components/Add/Add';
import Post from './components/Post/Post';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Edit from "./components/Post/Edit/Edit";

function App() {
  return (
    <BrowserRouter className="app">
      <ul className="nav">
        <NavLink className="link" to="/">HOME</NavLink>
        <NavLink className="link" to="/posts/add">ADD</NavLink>
        <NavLink className="link" to="/about">ABOUT</NavLink>
        <NavLink className="link" to="/contacts">CONTACTS</NavLink>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/add"><Add/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/contacts"><Contacts/></Route>
        <Route path="/posts" component={Post} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
