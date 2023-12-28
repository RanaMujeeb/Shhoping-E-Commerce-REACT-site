import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';


const ShopCategory = (props) => {
  const {all_product} =useContext(ShopContext);
  return (
 
    <div className='shop-category'>
      <img src={props.banner} alt="" className='img1'/>
      <div className="shopcategory-indexsort">
        <p><span>Showing 1-12</span> Out of 36 Products</p>
     
      <div className="shopcategory-sort">
        Sort by <img src={dropdown_icon} alt="dropdown icon" srcset="" />
      </div>
      
      </div>
      <hr/>
      <div className="shopcategory-products">
        
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
          }
          else{
            return null;
          }
        })

        }
      </div>
      <div className="loadmore">Explore More</div>
    </div>
  )
}

export default ShopCategory