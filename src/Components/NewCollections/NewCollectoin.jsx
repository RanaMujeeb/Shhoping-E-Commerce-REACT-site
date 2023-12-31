import React from 'react'
import './NewCollection.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'
const NewCollectoin = () => {
  return (

    <div className='new_collections'>
        <h1>New Collections</h1><hr/>
        <div className="collections">
            {new_collection.map((item,i)=>{
                return<Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
            })}
        </div>

    </div>
  )
}

export default NewCollectoin