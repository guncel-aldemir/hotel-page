import React from 'react'
import {AiFillStar} from "react-icons/ai";
import "../../assets/styles/FeedBackCard.scss"
const FeedBackCard = ({id,text,nickname,site}) => {
  return (
    <div className='feedbackCard' id={id}>
        <div className='stars'>
            <AiFillStar color='#dba765' size={24} />
            <AiFillStar color='#dba765' size={24} />
            <AiFillStar color='#dba765' size={24} />
            <AiFillStar color='#dba765' size={24} />
            <AiFillStar color='#dba765' size={24} />
        </div>
        <div className='feedbackText'>
            <p>{text}</p>
            <span>{nickname}</span>
            <span>{site}</span>
        </div>
    </div>
  )
}

export default FeedBackCard