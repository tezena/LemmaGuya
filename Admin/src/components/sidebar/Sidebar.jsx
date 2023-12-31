import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">LGF Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/artists" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Artist</span>
            </li>
          </Link>
          <Link to="/images" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Images</span>
            </li>
          </Link>
         
          <Link to="/education" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Education</span>
            </li>
          </Link>
          <Link to="/posts" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Posts</span>
            </li>
          </Link>
          <Link to="/events" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Events</span>
            </li>
          </Link>
          <Link to="/researchs" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Research</span>
            </li>
            </Link>

         
          <p className="title">USER</p>
          <Link to="/researchs" style={{ textDecoration: "none" }}>

          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>

          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
