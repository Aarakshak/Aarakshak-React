import React, { useState, useEffect, useContext } from 'react';
import AdminIdContext from "../context/adminContext";
import axios from 'axios';
import "../../assets/css/sos.css";
import NavbarInside from './navbar-inside2';
import SupervisionCard from "./supervision-card";


  const Supervision = () => {
    const { adminId } = useContext(AdminIdContext);
    const [supData, setSupData] = useState([]);
  
    const url_post = `https://violet-kitten-toga.cyclic.cloud/v1/admin/surveillance/${adminId}`;
    useEffect(() => {
      axios.get(url_post)
        .then(response => {
          setSupData(response.data.userInfo);
          console.log(response.data.userInfo);
        })
        .catch(error => {
          console.error('Error fetching Supervision data:', error);
        });
    }, []);
  

  return (
    <div className='home-outer-sos'>
      <div>
        <NavbarInside />
      </div>
      <center><h1 className="sos-heading">POLICE SUPERVISION</h1></center>
      <div className="cards">
        {Array.isArray(supData) && supData.length > 0 ? (
          supData.map((supItem, index) => (
            <SupervisionCard
              key={index}
              policeName={supItem.name}
              badgeId={supItem.badgeID}
              sessionDate={supItem.sessionDate}
              startTime={supItem.startTime}
              endTime={supItem.endTime}
              sessionLocation={supItem.sessionLocation}
              profilePic={supItem.photo}
            />
          ))
        ) : (
          <p>No supervision data available.</p>
        )}
      </div>
    </div>
  )
}

export default Supervision;
