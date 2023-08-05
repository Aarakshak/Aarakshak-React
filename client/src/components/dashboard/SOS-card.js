import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import "../../assets/css/sos.css";
import police from "../../assets/images/profile-photo.jpg";
import AdminIdContext from "../context/adminContext";

const SupervisionCard = (props) => {
  const { adminId } = useContext(AdminIdContext);
  const { policeName, issueID, badgeID, time, description, latitude, longitude, respond } = props;
  const [isResponded, setIsResponded] = useState(respond);
  const [mapData, setMapData] = useState([]);
  const data='';
  const url = `http://api.positionstack.com/v1/reverse?access_key=d190b912df2409194e8d4fad59e1637f&query=${latitude}%2C${longitude}`;
  const url_post = `https://violet-kitten-toga.cyclic.cloud/v1/admin/resolve-sos/${adminId}/${badgeID}/${issueID}`;
  
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

    axios.patch(url_post,data)
    .then((response) => {
      console.log('Response sent successfully:', response.data);
    })
    .catch((error) => {
      console.error('Error responding to SOS:', error);
    });
  };

  return (
    <div className="card">
 
      <div className="card-body">
        <div className="card-header">
          <div className="sos-card-head">
            <h2 className="police-name">{policeName}</h2>
            <h6>POLICE ID - {badgeID}</h6>
          </div>
          <img src={police} alt="Police Profile" className='card-img-sos' />
        </div>
        <div className="ul">
        <div className="info-box">
            Time <span>{time}</span>
          </div>
          <div className="info-box">
            Latitude <span>{time}</span>
          </div>
          <div className="info-box">
            Longitude <span>{time}</span>
          </div>
        </div>
        <div className="ul">
          <div className="info-box">
            Location <span>{mapData.data?.[0].label}</span>
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