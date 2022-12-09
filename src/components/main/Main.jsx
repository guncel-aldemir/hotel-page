import React from "react";
import Rooms from "../rooms/Rooms";
import Highlighty from "./Highlighty";
import Welcome from "./Welcome";
import Amenity from "../amenity/Amenity";
const Main = () => {
  return <main>
    <Welcome/>
    <Highlighty/>
    <Rooms/>
    <Amenity/>
  </main>;
};

export default Main;
