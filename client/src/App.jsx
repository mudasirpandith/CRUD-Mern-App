import "./App.css";
import React from "react";
import "react-modern-drawer/dist/index.css";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Register from "./components/register";
import Physics from "./components/subjects/physics";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Pages/Leaders/subject/one/physics"
          element={<Physics />}
        />
      </Routes>
    </>
  );
}

export default App;
