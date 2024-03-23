//import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//import Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";
//import Boxicons
import "boxicons/css/boxicons.min.css";
import React, { useState, useEffect } from "react";
import "./App.css";
import Banner from "./pages/Banner";
import Header from "./components/Header";

export const AppContext = React.createContext();

function App() {
  const [data, setData] = useState([]);

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
    <AppContext.Provider value={{ data, setData }}>
      <Header />
      <Banner />
    </AppContext.Provider>
  );
}

export default App;
