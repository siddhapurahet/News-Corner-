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
          <Route path="/business" element={<FetchData cat="America"/>}/>
          <Route path="/entertainment" element={<FetchData cat="Canada"/>}/>
          <Route path="/general" element={<FetchData cat="United Kingdom"/>}/>
          <Route path="/science" element={<FetchData cat="India"/>}/>
          <Route path="/sports" element={<FetchData cat="China"/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
