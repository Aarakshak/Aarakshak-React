import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import "../../assets/css/sos.css";

const SOSCard = (props) => {
  const { policeName, badgeId, sessionDate, startTime, endTime, sessionLocation, checkIn, checkPointAttended, profilePic, userlatitude, userlongitude} = props;
  const [mapDataSUP, setMapDataSUP] = useState([]);

  const url = `http://api.positionstack.com/v1/reverse?access_key=d190b912df2409194e8d4fad59e1637f&query=${userlatitude}%2C${userlongitude}`;

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setMapDataSUP(res.data);
        console.log(mapDataSUP);
      })
      .catch(error => {
        console.error('Error fetching SOS data:', error);
      });
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-header">
          <div className="sos-card-head">
            <h2 className="police-name">{policeName}</h2>
            <h6>POLICE ID - {badgeId}</h6>
          </div>
          <img src={profilePic} alt="Police Profile" className='' />
        </div>

        <div className="ul">
          <div className="info-box">
            Location : <span>{mapDataSUP.data?.[0].label}</span>
          </div>
        </div>

        <div className="ul">
          <div className="info-box">
            Duty Start Time : <span>{startTime}</span>
          </div>

          <div className="info-box">
            Duty End Time : <span>{endTime}</span>
          </div>
        </div>

        <div className="ul">
          <div className="info-box">
            Check-in Time : <span>{checkIn}</span>
          </div>

          <div className="info-box">
            Checkpoint{'('}s{')'} Attendance : <span>{checkPointAttended ? 'Marked' : 'Not Marked'}</span>
          </div>
        </div>

        <button className="btn-sos" onClick=""           
        style={{
            backgroundColor:'#9a69c2' ,
            color: 'white',
            marginTop: '20px',
          }}>
          Get Current Location
        </button>


      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default SOSCard;

