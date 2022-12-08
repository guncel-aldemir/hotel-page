import React from "react";
import Rooms from "../rooms/Rooms";
import Highlighty from "./Highlighty";
import Welcome from "./Welcome";

const Main = () => {
  return <main>
    <Welcome/>
    <Highlighty/>
    <Rooms/>
  </main>;
};

export default Main;
