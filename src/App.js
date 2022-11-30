import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar.js";
import Convertisseur from "./pages/convertisseur.js";
import Page404 from "./pages/page404.js";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header>
        <AppBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Convertisseur />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);

export default App;
