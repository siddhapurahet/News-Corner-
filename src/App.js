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
          {/* <Route path="/general" element={<FetchData/>}/> */}
          <Route path="/business" element={<FetchData cat="in"/>}/>
          <Route path="/entertainment" element={<FetchData cat="us"/>}/>
          <Route path="/general" element={<FetchData cat="ca"/>}/>
          <Route path="/science" element={<FetchData cat="gb"/>}/>
          <Route path="/sports" element={<FetchData cat="in"/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
