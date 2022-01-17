import "./App.css";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import AppBar from "@mui/material/AppBar";
import { Routes, Route, NavLink } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Register from "./components/register";
function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleDrawerBack = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <AppBar color="primary">
        {" "}
        <div className="navIcon" onClick={toggleDrawer}>
          &#9776;
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="bla bla bla"
          duration={200}
        >
          <NavLink
            style={{ marginTop: "30px" }}
            className="nav-link"
            onClick={toggleDrawerBack}
            to="/login"
          >
            {" "}
            Log In
          </NavLink>
          <br />
          <NavLink className="nav-link" onClick={toggleDrawerBack} to="/">
            {" "}
            Home
          </NavLink>{" "}
          <br />
          <NavLink
            className="nav-link"
            onClick={toggleDrawerBack}
            to="/register"
          >
            {" "}
            Register
          </NavLink>{" "}
          <br />
        </Drawer>
        <h1 className="app-title">TEST</h1>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
