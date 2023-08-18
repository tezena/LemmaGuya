import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../context/AuthenticationContext";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuthentication();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        {/* <Navbar /> */}
        <div className="widgets">
          <Widget type="image" />
          <Widget type="education" />
          <Widget type="research" />
          <Widget type="post" />
          <Widget type="event" />
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
