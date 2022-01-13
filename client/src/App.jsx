import React from "react";

import { Route, Routes, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import RecordList from "./components/recordlist";
import Edit from "./components/edit";
import Create from "./components/create";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleDrawerBack = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleDrawer}>&#9776;</button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla bla bla"
      >
        {" "}
        <NavLink
          className="nav-link"
          onClick={toggleDrawerBack}
          className="nav-link"
          to="/create"
        >
          Create Record
        </NavLink>{" "}
      </Drawer>{" "}
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
};

export default App;
