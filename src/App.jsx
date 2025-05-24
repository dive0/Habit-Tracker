import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NotFound from "./components/NotFound"

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
