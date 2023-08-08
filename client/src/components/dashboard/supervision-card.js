import React, { useState, useEffect, useContext } from 'react';
import Map, {Marker} from 'react-map-gl';
import marker from "../../assets/logos/loc-check.png"
import axios from 'axios';
import "../../assets/css/sos.css";

const SupervisionCard = (props) => {
  const { policeName, badgeId, sessionDate, startTime, endTime, sessionLocation, checkIn, checkPointAttended, profilePic, latitude, longitude} = props;
  const [mapDataSUP, setMapDataSUP] = useState([]);

  const url = `http://api.positionstack.com/v1/reverse?access_key=d190b912df2409194e8d4fad59e1637f&query=${latitude}%2C${longitude}`;

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
          <div className="sos-card-head-2">
            <h2 className="police-name">{policeName}</h2>
            <h6>POLICE ID - {badgeId}</h6>
          </div>
          <img src={profilePic} alt="Police Profile" className='img-surv2' />
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
      <div className='map-outer'>
        
        {latitude && longitude ? <Map
        mapboxAccessToken="pk.eyJ1IjoiYXN1ciIsImEiOiJja3Q2ZXhkYW4waHJwMm5xbHVrZnE2YjZ2In0.pQ-92peoEdKmKFJAi6DoSg"
        initialViewState={{
          longitude: longitude,
          latitude: latitude,
          zoom: 14.5
        }}
        style={{width:400, height:400}}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
      <Marker longitude={longitude} latitude={latitude} anchor="bottom" >
        <img src= {marker} />
      </Marker>

      </Map>: ""}
      </div>
    </div>
  );
};

export default SupervisionCard;

