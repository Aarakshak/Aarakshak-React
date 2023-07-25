import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../assets/css/sos.css";

const SOSCard = (props) => {
  const { policeName, badgeId, sessionID, sessionDate, startTime, endTime, sessionLocation, checkIn, checkPointAttended} = props;

  const [profilePic, setProfilePic] = useState('');

  useEffect(() => {
    axios.get('')
      .then(response => {
        setProfilePic(response.data.profilePic);
      })
      .catch(error => {
        console.error('Error fetching Supervision data:', error);
      });
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-header">
          <div className="sos-card-head">
            <h2 className="police-name">{policeName}</h2>
            <h6>{badgeId}</h6>
          </div>
          <img src={profilePic} alt="Police Profile" />
        </div>

        <div className="ul">
          <div className="info-box">
            Location : <span>{sessionLocation}</span>
          </div>

          <div className="info-box">
            Date : <span>{sessionDate}</span>
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


      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default SOSCard;

