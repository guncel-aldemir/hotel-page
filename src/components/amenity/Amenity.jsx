import React from 'react'
import "../../assets/styles/Amenity.scss"
import Card from './Card';
import {FaSwimmingPool} from "react-icons/fa";
import {IoIosFitness} from "react-icons/io";
import {GiCastle} from "react-icons/gi";
import {MdLocalParking} from "react-icons/md"
const amenity = () => {
    
  return (
    <section className='amenitySide' style={{backgroundImage:"url(https://demo2wpopal.b-cdn.net/seasona/wp-content/uploads/2022/05/pattent.png)"}}>
        <div className='amenity'>
            <div className='amenityTitle'>
                <span>Amenities</span>
                <h3>MAKE YOUR STAY MEMORABLE</h3>

            </div>
            <div className='amenityCard'>
                <div className='firstCard'>
                    <Card icon={<FaSwimmingPool size={30} color="#333"/>} title="Outdoor Swimming Pool" desc="Our big-sized swimming pool, conveniently located in an adjacent clubhouse" url="/"/>
                </div>
                <div className='secondCard'>
                    <Card icon={<IoIosFitness size={30} color="#333"/>} title="Fitness Center" desc="Fully equipped gym and fitness for your workout regime, anytime of the day." url="/"/>
                </div>
                <div className='thirdCard'>
                    <Card icon={<GiCastle size={30} color="#333"/>} title="Kids Playground" desc="An indoor & outdoor playground with slides, climbers and swings." url="/"/>
                </div>
                <div className='fourthCard'>
                    <Card icon={<MdLocalParking size={30} color="#333"/>} title="Parking Space" desc="Please consider your private parking or better yet." url="/"/>
                </div>
                </div>
        </div>
        
    </section>
  )
}

export default amenity