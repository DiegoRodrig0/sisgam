import "./App.css";
import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MiniDrawer from "./components/MiniDrawer/MiniDrawer";
import LoginPage from "./components/LoginPage/LoginPage";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <MiniDrawer content={Outlet} />
      <LoginPage />
      <Footer />
    </div>
  );
}

export default App;
