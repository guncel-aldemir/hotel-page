import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({title,icon,desc,url}) => {
  return (
    <div className='card'>
        <div className='cardUpper'>
            {icon}
            <h4>{title}</h4>
        </div>
        <div className='cardDown'>
            <p>{desc}</p>
            <NavLink  to={url}>Discover More!</NavLink>
            {/* <span className='hoverSpan'>Discover me</span> */}
        </div>
            
    </div>
  )
}

export default Card