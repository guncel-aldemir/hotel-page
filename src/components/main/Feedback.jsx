import React,{useState,useEffect} from 'react'
import '../../assets/styles/Feedback.scss'
import FeedBackCard from './FeedBackCard';
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai";
const Feedback = () => {
  return (
    <section className='feedBackSide'>
      <div className='feedbackTitle'>
        <span>
        testimonials
        </span>
        <h3>Guest feedback</h3>
      </div>
      <div className='backgroundFeedback'>
      <AiOutlineLeft size={30} />
        <FeedBackCard id={1} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit officiis quas aspernatur quis laborum, vitae earum! Assumenda autem ipsa aut minima voluptatibus eos fugit consequatur vel et, expedita minus odio."} nickname="John Doe" site="Tripadvisor"/>
        <FeedBackCard id={2} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit officiis quas aspernatur quis laborum, vitae earum! Assumenda autem ipsa aut minima voluptatibus eos fugit consequatur vel et, expedita minus odio."} nickname="John Doe" site="Tripadvisor"/>
         {/* <FeedBackCard id={3} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit officiis quas aspernatur quis laborum, vitae earum! Assumenda autem ipsa aut minima voluptatibus eos fugit consequatur vel et, expedita minus odio."} nickname="John Doe" site="Tripadvisor"/>
       <FeedBackCard id={4} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit officiis quas aspernatur quis laborum, vitae earum! Assumenda autem ipsa aut minima voluptatibus eos fugit consequatur vel et, expedita minus odio."} nickname="John Doe" site="Tripadvisor"/>
        <FeedBackCard id={5} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit officiis quas aspernatur quis laborum, vitae earum! Assumenda autem ipsa aut minima voluptatibus eos fugit consequatur vel et, expedita minus odio."} nickname="John Doe" site="Tripadvisor"/> */}
        <AiOutlineRight size={30} />
      </div>
    </section>
  )
}

export default Feedback