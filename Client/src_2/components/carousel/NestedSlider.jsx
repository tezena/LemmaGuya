import React from 'react'
import MessageCard from './messageCard'
import slidesData from './slideData';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: false,
    infinite: true,
    arrows:false,
    vertical:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


function NestedSlider() {
  return (
    <div className='   w-50  h-50  text-white    mx-4  position-absolute  py-2 px-sm-5' style={{ zIndex:"3",height:"100%",top:"120px"}} >
      <Slider style={{height:"100%"}} {...settings}>
      {slidesData.map((item,index)=>{return <MessageCard name={item.title} mesg={item.message}  color={item.butnColor} />})}

    </Slider> 
    </div>
  )
}

export default NestedSlider