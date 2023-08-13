import React,{useState}  from "react";
import Slider from 'react-slick';
 import 'slick-carousel/slick/slick.css';
 import 'slick-carousel/slick/slick-theme.css';
 import CarouselBanner from "./banner";
 import slidesData from "./slideData";
 import NestedSlider from "./NestedSlider";



 const settings = {
  dots: false,
  infinite: true,
  arrows:false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};





function Carousel(){
    return(
      <div className='  w-100 position-relative ' style={{zIndex:"1"}}>
      <Slider {...settings}>
      {slidesData.map((item,index)=>{return <CarouselBanner img={item.url}/>})}
    </Slider>
    <NestedSlider/>

</div>)

}

export default Carousel;

