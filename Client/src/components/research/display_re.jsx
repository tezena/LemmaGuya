import React,{useEffect,useState} from 'react'
import "./style.css"
import ResCard from './re_card';



function ResDisplay() {


  const [data, setData] = useState([]);

  useEffect(() => {  
    fetch("http://localhost:5001/api/getresearches")
    .then((response) => response.json())
    .then((jsonData) => {
      setData(jsonData); // Update the state with fetched data
      console.log(jsonData); 
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, []);
 

  return (
    <div className='container mx-auto row '>
        <div className="col-12  hhh overflow-auto hidesb ">

          {data.map((blog)=>(<div className="row">
            <ResCard image={blog.imageUrl} title={blog.title} text={blog.summary}/>
            </div>))}
            
        </div>
    
    </div>
  )
}

export default ResDisplay