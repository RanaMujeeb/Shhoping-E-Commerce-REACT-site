import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
       <Link to={`/:productId/${props.id}`}><img src={props.image} alt="" /></Link> 
        <p>{props.name}</p>
        <div className="item_prices">
            <div className="item_new_price">${props.new_price}</div>
            <div className="item_old_price">${props.old_price}</div>
        </div>

    </div>
  )
}

export default Item ;