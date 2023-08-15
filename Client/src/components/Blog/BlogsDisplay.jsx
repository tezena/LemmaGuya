import React,{useEffect,useState} from 'react'
import PostCards from './PostCards'
import "./style.css"
import SideEvents from './SideEvents'
function BlogsDisplay() {


  const [data, setData] = useState([]);

  useEffect(() => {  
    fetch("http://localhost:5000/api/getblogs")
    .then((response) => response.json())
    .then((jsonData) => {
      setData(jsonData); // Update the state with fetched data
      console.log(jsonData); // Log the fetched data
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, []);
 

  return (
    <div className='container mx-auto row '>
        <div className="col-8  hhh overflow-auto hidesb ">

          {data.map((blog)=>(<div className="row">
            <PostCards image={blog.imageUrl} title={blog.title} text={blog.describtion}/>
            </div>))}
        
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