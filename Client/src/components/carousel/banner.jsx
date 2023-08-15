import React from 'react'

function CarouselBanner(props) {
  return (
    <div  style={{backgroundImage:`url(${props.img})`,
                  backgroundAttachment:"fixed", backgroundSize:"cover",backgroundPosition:"center" ,height:"600px",backgroundRepeat:"no-repeat"}} className='w-100 '>
      
    </div>
  )
}

export default CarouselBanner