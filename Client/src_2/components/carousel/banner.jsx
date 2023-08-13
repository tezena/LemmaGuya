import React from 'react'

function CarouselBanner(props) {
  return (
    <div  style={{backgroundImage:`url(${props.img})`,
                  backgroundAttachment:"fixed", backgroundSize:"cover",backgroundPosition:"center" ,height:"400px"}} className='w-100 '>
      
    </div>
  )
}

export default CarouselBanner