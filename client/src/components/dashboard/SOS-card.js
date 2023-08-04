import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import "../../assets/css/sos.css";
import police from "../../assets/images/profile-photo.jpg";

const SupervisionCard = (props) => {
  const { policeName, badgeId, time, location, description, respond } = props;
  const [isResponded, setIsResponded] = useState(respond);
  const [mapData, setMapData] = useState([]);

  const lat=30.374856;
  const long=76.370664;
  const url = `https://us1.locationiq.com/v1/reverse?key=pk.0f0d0860846ceff2f478b159721575b2&lat=${lat}&lon=${long}&format=json`;
  
  useEffect(() => {
    axios.get(url)
      .then(res => {
        setMapData(res.data);
      })
      .catch(error => {
        console.error('Error fetching SOS data:', error);
      });
  }, []);

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
            Time <span>{time}</span>
          </div>
          <div className="info-box">
            Time <span>{time}</span>
          </div>
          <div className="info-box">
            Time <span>{time}</span>
          </div>
        </div>
        <div className="ul">
          <div className="info-box">
            Location <span>{mapData.display_name}</span>
          </div>
        </div>
        <p className="card-text">
          {description}
        </p>
        <button
          className="btn-sos"
          style={{
            backgroundColor: isResponded ? '#9a69c2' : '#9a69c2',
            color: isResponded ? 'white' : 'white',
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