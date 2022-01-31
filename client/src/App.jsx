import React from "react";

import { Route, Routes, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import RecordList from "./components/recordlist";

import Create from "./components/create";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import Login from "./components/login";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
};

export default App;
