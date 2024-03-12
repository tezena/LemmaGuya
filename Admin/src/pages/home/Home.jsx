import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../context/AuthenticationContext";
import axios from "axios"
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import PagesOutlinedIcon from '@mui/icons-material/PagesOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import EventSeatOutlinedIcon from '@mui/icons-material/EventSeatOutlined';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuthentication();
  const [myData,setData]=useState("");


  const fetchData=async ()=>{
      const response=await axios.get("http://localhost:5001/api/allDataNum")

      setData(response.data);
  }

  useEffect(() => {
  
    fetchData()
    console.log(myData)

    if (!user) {
      navigate("/");
    }
  }, []);
  
  

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        {/* <Navbar /> */}
        <div className="widgets">
          <Widget title="Images"  amount={myData.imagesNum}  icon={<CollectionsOutlinedIcon className="icon"/>}/>
          <Widget title="Artists"  amount={myData.artisNum}  icon={<PeopleAltOutlinedIcon className="icon"/>}/>
          <Widget title="Researchs"  amount={myData.researchsNum} icon={<ScienceOutlinedIcon className="icon"/>} />
          <Widget title="Posts"   amount={myData.blogsNum} icon={<PagesOutlinedIcon/>} className="icon" />
          <Widget title="Events"  amount={myData.eventsNum} icon={<EventSeatOutlinedIcon className="icon"/>}/>
        </div>
        <div className="charts">
          <Featured />
          {/* <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> */}
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Donation</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
