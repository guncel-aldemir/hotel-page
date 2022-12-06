import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "../../assets/styles/Home.scss";
import Header from "../../components/header/Header";
import Welcome from "../../components/main/Welcome";
import Main from "../../components/main/Main";
const Home = () => {
  return <div className="home">
    <Navbar/>
    <Header/>
    <Main/>
  </div>;
};

export default Home;
