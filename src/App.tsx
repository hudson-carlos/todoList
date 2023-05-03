import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Componets/Register";
import Login from "./Componets/Login";
import List from "./Componets/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:user/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
