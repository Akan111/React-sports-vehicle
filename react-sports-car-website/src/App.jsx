//import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//import Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";
//import Boxicons
import "boxicons/css/boxicons.min.css";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Banner from "./pages/Banner";
import Header from "./components/Header";
import Vehicles from "./pages/Vehicles";
import VehicleDetails from "./pages/VehicleDetails";
import Library from "./pages/Library";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export const AppContext = React.createContext();

function App() {
  const [data, setData] = useState([]);
  const [library, setLibrary] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:5173/api/vehiclesData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <AppContext.Provider value={{ data, setData, library, setLibrary }}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Banner />} />
        <Route exact path="/vehicles" element={<Vehicles />} />
        <Route exact path="/vehicles/:id" element={<VehicleDetails />} />
        <Route exact path="/library" element={<Library />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
