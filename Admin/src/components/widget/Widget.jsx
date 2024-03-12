import "./widget.scss";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Widget = ({ title ,amount,icon}) => {
 


  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <span className="counter ">
          
        {amount==null? <CircularProgressbar value={60} strockwidth={1}  styles={buildStyles({
    rotation: 0.25,
    strokeLinecap: 'butt',
    textSize: '16px'})}  className="progress"/>  :amount  }
          

       </span>
      </div> 
      <div className="right">   
      <div className="icon">
      {icon}
        </div>     
     
      </div>
    </div>
  );
};

export default Widget;
