import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";

const AppRouter = () => {
  return <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/details/:id" element={<MovieDetail/>}/>

  </Routes>
    </BrowserRouter>;
};

export default AppRouter;
// apiKey: "AIzaSyDTmfx82lSzsB19wWcoxGB4221awGD-cZc",
// authDomain: "movie-app-in.firebaseapp.com",
// projectId: "movie-app-in",
// storageBucket: "movie-app-in.appspot.com",
// messagingSenderId: "804338685930",
// appId: "1:804338685930:web:ea74084331339a44c44493"