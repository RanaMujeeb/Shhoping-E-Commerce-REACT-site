import React from 'react'
import './Popular.css'
import datajs from '../Assets/data'
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div>
<div className="popular">
    <h1>Popular In Women</h1><hr/>
    <div className="popular_item">
        {datajs.map((item,i)=>{
            return<Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
        })}
    </div>
</div>
    </div>
  )
}

export default Popular