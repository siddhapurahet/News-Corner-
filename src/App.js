import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FetchData from "./components/FetchData";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<FetchData cat="general"/>}/>
          <Route path="/business" element={<FetchData cat="business"/>}/>
          <Route path="/entertainment" element={<FetchData cat="entertainment"/>}/>
          <Route path="/general" element={<FetchData cat="general"/>}/>
          <Route path="/science" element={<FetchData cat="science"/>}/>
          <Route path="/sports" element={<FetchData cat="sports"/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
