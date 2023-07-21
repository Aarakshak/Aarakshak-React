import {useState} from 'react'
import "../../assets/css/sos.css";
import police from "../../assets/images/profile-photo.jpg";

const SOSCard = (props) => {
  const { policeName, badgeId, duration, location, description } = props;
  const [isResponded, setIsResponded] = useState(false);
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-header">
        <div className="sos-card-head">
        <h2 className="police-name">{policeName}</h2>
        <h6>{badgeId}</h6>
        </div>
        <img src={police} />
        </div>
        <div className="ul">
            <div className="info-box">
              Location <span>{location}</span>
            </div>
      
          <div className="info-box">
              Duration <span>{duration}</span>
            </div>
         
        </div>
        <p class="card-text">
          {description}
        </p>
        <a href="#" className="btn">
          Mark as responded
        </a>
      </div>
      <div class="col-md-4"></div>
    </div>
  );
};

export default SOSCard;
