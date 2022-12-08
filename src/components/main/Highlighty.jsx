import React,{ useState,useEffect } from "react";

import "../../assets/styles/Highlighty.scss";
import Experiences from "../../Experiences";
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"
const Highlighty = () => {
  const [datas,setDatas]=useState(Experiences)
  const [sliderPhotos,setSliderPhotos]= useState(0);
  let count ;
  const handleClickPrev= ()=>{
    count = sliderPhotos === 0 ? 3 : sliderPhotos - 1
    setSliderPhotos(count)
  }
  const handleClickNext = ()=>{
    count= sliderPhotos === 3 ? 0: sliderPhotos + 1
    setSliderPhotos(count)
  }
useEffect(()=>{
  const auto = setInterval(()=>{
    handleClickNext()
  },3000);
  return ()=>{
    clearInterval(auto)
  }
},[sliderPhotos])
  const bgSliderStyle={
    background:`url(${datas[sliderPhotos].image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    height: "450px",
    width: "900px",

}
  return <section className="highlighty" >
<div className="backgroundImage" style={{backgroundImage:"url(https://demo2wpopal.b-cdn.net/seasona/wp-content/uploads/2022/05/pattent.png)"}}>

  <div className="hightlightyTitle">
    <h3>highlights</h3>
    <h2>EXPERIENCE THE INFINITY</h2>
    <div className="highlightyTitle-slider" style={bgSliderStyle} >
      <div className="arrowLeft" onClick={()=>handleClickPrev}>
        {/* <AiOutlineArrowLeft size={30} color="#fff" /> */}
      </div>
    {
      <div className="information-slider">
        <h3>{datas[sliderPhotos].title}</h3>
        <p>{datas[sliderPhotos].desc}</p>
        <span>{datas[sliderPhotos].hour}</span>
      </div>
    }
     <div className="arrowRight" onClick={()=>handleClickNext}>
        {/* <AiOutlineArrowRight size={30} color="#fff"/> */}
      </div>
    </div>
  </div>
</div>
  </section>;
};

export default Highlighty;
