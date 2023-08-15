import React from "react";
import { ReactDOM ,useEffect} from "react";
import BlogCard from "./Card";





function DisplayCard(props) {  
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
      <div className="w-100 h-100  d-flex-col justify-content-center align-items-center  py-3" >
        {
          data.map((item) => {
            return (
              <BlogCard title={item.title} image={item.imageUrl} buttonText={item.btnText} text={ item.describtion} />
            )
          })
        }
        </div>
    )
}

export default DisplayCard