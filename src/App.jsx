import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import DataContext from "./components/DataContext"; // Importiere die Data-Komponente
import Headers from "./components/Headers";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/headers" element={<Headers />} />
      <Route path="/datacontext" component={<DataContext />} />
      <Route path="/footer" component={<Footer />} />
    </Routes>
  );
}

export default App;
