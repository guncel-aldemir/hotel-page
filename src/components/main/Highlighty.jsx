import React from "react";
import { useState } from "react";
import "../../assets/styles/Highlighty.scss";
import Experiences from "../../Experiences";
const Highlighty = () => {
  const [datas,setDatas]=useState(Experiences)
  const [sliderPhotos,setSliderPhotos]= useState(0);
  const bgSliderStyle={
    background:`url(${datas[sliderPhotos].image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "500px",
    width: "100%",

}
  return <section className="highlighty" >
<div className="backgroundImage" style={{backgroundImage:"url(https://demo2wpopal.b-cdn.net/seasona/wp-content/uploads/2022/05/pattent.png)"}}>

  <div className="hightlightyTitle">
    <h3>highlights</h3>
    <h2>EXPERIENCE THE INFINITY</h2>
    <div className="highlightyTitle-slider" style={bgSliderStyle} >
    {
      <div>
        <h3>{datas[sliderPhotos].title}</h3>
        <p>{datas[sliderPhotos].desc}</p>
        <span>{datas[sliderPhotos].hour}</span>
      </div>
    }
     
    </div>
  </div>
</div>
  </section>;
};

export default Highlighty;
