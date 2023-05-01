import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "flowbite";
import "./App.css";
import PaginaInicio from "./components/material/PaginaInicio";
import PaginaSobreMi from "./components/material/PaginaSobreMi";




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<PaginaInicio />} />
      <Route path="/sobremi" element={<PaginaSobreMi />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
