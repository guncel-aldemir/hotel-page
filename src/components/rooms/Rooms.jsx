import React,{ useState } from 'react'
import { NavLink } from 'react-router-dom';
import "../../assets/styles/Rooms.scss";
import {BsArrowRight} from "react-icons/bs";

const Rooms = () => {
    const [hover,setHover]= useState(false);

    const handleMove = (enter)=>{
        if(enter === "l"){
            setHover(!hover)
        } else if(enter === "d"){
            setHover(!hover)
        } else{
            setHover(!hover)
        }
    }
    const handleLeave = (direction)=>{
        if(direction === "l"){
            setHover(!hover)
        } else if(direction === "d"){
            setHover(!hover)
        } else{
            setHover(!hover)
        }
    }
   
  return (
    <section className="roomsSide">
        <div className='roomsSide-Title'>
            <span className='subtitle'>explore</span>
            <h2 className="title">ROOMS & SUITES</h2>
            <NavLink to="/">View all Rooms 
            <BsArrowRight size={24} color="#dba765"/></NavLink>
            
          
        </div>
        <div className='roomsPhotosSide'>
            <div className='roomLuxuryRoom'>
                <img src='https://demo2wpopal.b-cdn.net/seasona/wp-content/uploads/2022/04/room5-1-820x520.jpg' alt='luxury-room'/>
                <div className='luxuryRoomText' >
                    <h4>LUXURY ROOM</h4>
                    <p>135 sqmMax. 4 guests</p>
                    <div className={hover ?  'priceSide': "nonactive"} onMouseOver={()=>handleMove('l')}>
                        <p><strong>From </strong> $153 /per day.</p>
                    </div>
                    <div className= {hover ?  'linkSide': "active"} onMouseLeave={()=>handleLeave('l')}>
                    <NavLink to="/">View Detail</NavLink>
                    </div>
                </div>
            </div>
            <div className='roomRooms'>
                
                <div className='roomDoubleRoom'>
                    <img src='https://demo2wpopal.b-cdn.net/seasona/wp-content/uploads/2022/04/room3-1-820x520.jpg' alt='double-room'/>
                    <div className='doubleRoomText' >
                        <h4>Double ROOM</h4>
                        <p>264 sqmMax. 10 guests</p>
                        <div className={hover ?  'priceSide': "nonactive"} onMouseOver={()=>handleMove('l')}><p><strong>From </strong> $153 /per day.</p></div>
                        <div className= {hover ?  'linkSide': "active"} onMouseLeave={()=>handleLeave('d')}>
                    <NavLink to="/">View Detail</NavLink>
                    </div>
                    </div>
                </div>
                <div className='roomJuniorRoom'>
                    <img src='https://demo2wpopal.b-cdn.net/seasona/wp-content/uploads/2022/04/room1-1-820x520.jpg' alt='junior-room'/>
                    <div className='juniorRoomText'>
                        <h4>Junior Suite ROOM</h4>
                        <p>175 sqmMax. 5 guests</p>
                        <div className={hover ?  'priceSide': "nonactive"} onMouseOver={()=>handleMove('l')}><p><strong>From </strong> $153 /per day.</p></div>
                        <div className= {hover ?  'linkSide': "active"} onMouseLeave={()=>handleLeave('j')}>
                            <NavLink to="/">View Detail</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Rooms