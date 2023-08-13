import React from 'react'
import PostCards from './PostCards'
import "./style.css"
import SideEvents from './SideEvents'
function BlogsDisplay() {
  return (
    <div className='container mx-auto row '>
        <div className="col-8  hhh overflow-auto hidesb ">
        <div className="row"><PostCards/></div>
        <div className="row"><PostCards/></div>
        <div className="row"><PostCards/></div>
        <div className="row"><PostCards/></div>
            
        </div>
        <div className="col-4">
        <SideEvents />
        <SideEvents />
        <SideEvents />
        <SideEvents />
        <SideEvents />

        </div>
    </div>
  )
}

export default BlogsDisplay