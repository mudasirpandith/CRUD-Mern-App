import "./App.css";
import React from "react";
import "react-modern-drawer/dist/index.css";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Register from "./components/register";
import Physics from "./components/subjects/physics";
import Chemistry from "./components/subjects/chemisrty";
import Biology from "./components/subjects/biology";
import Test from "./components/test/test";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/subjects/fullslybuss/physics/hefiufdnfiueqhfui3ededjreihfhbiu43hrfbui3reiudhfuh4389rueekjdnreuifhri"
          element={<Physics />}
        />
        <Route
          path="/subjects/fullslybuss/chemistry/hefiufdnfiueqhfui3ededjreihfhbiu43hrfbui3reiudhfuh4389rueekjdnreuifhri"
          element={<Chemistry />}
        />
        <Route
          path="/subjects/fullslybuss/biology/hefiufdnfiueqhfui3ededjreihfhbiu43hrfbui3reiudhfuh4389rueekjdnreuifhri"
          element={<Biology />}
        />{" "}
        <Route
          path="/take/test/subject/biology/test/core/m/leaderss/j554654dewdij9320jdsd45wed2sajerndcnedmklerjekdmejnjnejkdjksdnkejdnejkiojr932enj3wdnhiuedhyecfe/test"
          element={<Test />}
        />
      </Routes>
    </>
  );
}

export default App;
