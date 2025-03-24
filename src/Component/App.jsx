import React from 'react'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Component/Home";
import About from "./Component/About";
import Navbar from './Component/Navbar';
import Services from './Component/Services';
import UserList from './Component/UserList';
import UserProfile from './Component/UserProfile';
import GetURLParams from './Component/GetURLParams';

import PageNotfound from './Component/PageNotfound';
import Dashboard from './Component/Dashboard';
import Profile from './Component/Profile';
import Setting from './Component/Setting';
export default function App() {

  return (
    <div>
      <h1>React Router v6</h1>
      {/* navigation */}
      <BrowserRouter>
      <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/user" element={<UserList/>} />
      <Route path="/user/:userId" element={<UserProfile/>} />
      <Route path="/geturl" element={<GetURLParams/>} />
      <Route path="/dashboard/" element={<Dashboard/>} >
      <Route path="profile" element={<Profile/>}/>
      <Route path="setting" element={<Setting/>}/>
     </Route>
      {/* <Route path="/*" element={<h1>404 page</h1>} /> */}
      <Route path="/*" element={<PageNotfound/>} />
    </Routes>
  </BrowserRouter>
    </div>
  )
}
