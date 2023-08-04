import { useState } from 'react';
import "../../assets/css/sos.css";
import police from "../../assets/images/profile-photo.jpg";

const SupervisionCard = (props) => {
  const { policeName, badgeId, time, location, description, respond } = props;
  const [isResponded, setIsResponded] = useState(respond);

  const handleMarkResponded = () => {
    setIsResponded(!isResponded);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-header">
          <div className="sos-card-head">
            <h2 className="police-name">{policeName}</h2>
            <h6>{badgeId}</h6>
          </div>
          <img src={police} alt="Police Profile" className='card-img-sos' />
        </div>
        <div className="ul">
          <div className="info-box">
            Location <span>{location}</span>
          </div>

          <div className="info-box">
            Time <span>{time}</span>
          </div>
        </div>
        <p className="card-text">
          {description}
        </p>
        <button
          className="btn-sos"
          style={{
            backgroundColor: isResponded ? 'green' : '#9a69c2',
            color: isResponded ? 'white' : 'black',
          }}
          onClick={handleMarkResponded}
        >
          {isResponded ? 'Responded' : 'Mark as Responded'}
        </button>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default SupervisionCard;