import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Log from "./pages/Log";
import Contact from "./pages/Contact";
import Saved from "./pages/Saved";
import Details from "./pages/Details";
import Logo from "./pages/Logo";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path={"/"} element={<Logo />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/contactUs"} element={<Contact />} />
          <Route path={"/saved"} element={<Saved />} />
          <Route path={"/logIn"} element={<Log />} />
          <Route path={"/home/details/:nm"} element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
