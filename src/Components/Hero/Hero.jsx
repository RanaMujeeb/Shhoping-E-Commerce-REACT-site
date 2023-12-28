import React from 'react'
import '../Hero/Hero.css'
import bg1 from '../Assets/bg1.png';
const Hero = () => {
  return (
    <div className='hero_main'>
<img src={bg1} alt="" srcset="" useMap='#workmap'/>
<map name="workmap">
<area target="" alt="" title="" href="" coords="1231,519,1515,429" shape="rect"/>
    <area target="blank" alt="" title="" href="https://www.youtube.com/"  coords="873,203,1537,542" shape="rect"/>
    <area target="blank" alt="" title="" href="https://www.youtube.com/"  coords="" shape="0"/>
    </map>
    </div>
  )
}

export default Hero