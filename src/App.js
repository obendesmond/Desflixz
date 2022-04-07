import * as React from "react";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" exact element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
