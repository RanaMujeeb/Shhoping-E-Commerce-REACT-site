import React from 'react'
import './Offer.css'
import offer from '../Assets/offer.png'
const Offer = () => {
  return (
    <div className='offer'>
        <div className="offer_left">
            <h1>Exclusive Offers!</h1>
            <h1>New Collection For You</h1>
            <p>Only on Best Sellers</p>
            <button>Shop Now</button>
        </div>
        <div className="offer_right"><img src={offer} alt="" srcset="" /></div>
    </div>
  )
}

export default Offer