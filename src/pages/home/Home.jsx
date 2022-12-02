import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "../../assets/styles/Home.scss";
import Header from "../../components/header/Header";
import Welcome from "../../components/main/Welcome";
const Home = () => {
  return <div className="home">
    <Navbar/>
    <Header/>
    <Welcome/>
  </div>;
};

export default Home;
