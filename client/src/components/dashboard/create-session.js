import React, { useContext, useState } from "react";
import axios from "axios";
import time from "../../assets/logos/time.png";
import locationping from "../../assets/logos/locationping.png";
import keypad from "../../assets/logos/keypad.png";
import earth from "../../assets/logos/earth-globe.png";
import NavbarInside from "./navbar-inside2";
import "../../assets/css/home.css";
import AdminIdContext from "../context/adminContext";
import Swal from 'sweetalert2';

const Settings = () => {
  const { adminId } = useContext(AdminIdContext);
  const [location, setLocation] = useState('');
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [description, setDescription] = useState("");
  const [noOfCheckpoints, setNoOfCheckpoints] = useState("");
  const [mapDataCord, setMapDataCord] = useState([]);
  const [emergency, setEmergency] = useState('No'); 

  const url_admin = `https://violet-kitten-toga.cyclic.cloud/v1/admin/add-session/${adminId}`;

  const myfunc = (location) => {

    var location_encoded = encodeURIComponent(location);
    console.log(location_encoded)
  
    const url = `http://api.positionstack.com/v1/forward?access_key=aacf2732ace5e719a7c79c171077fd98&query=${location_encoded}`;

    axios.get(url)
      .then(res => {
        setMapDataCord(res.data);
        console.log(mapDataCord.data);
        setLatitude(mapDataCord.data[0].latitude)
        setLongitude(mapDataCord.data[0].longitude)
      })
      .catch(error => {
        console.error('Error fetching SOS data:', error);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const sessionDateStr = `${date}T00:00:00.530Z`;
    const startTimeStr = `${date}T${startTime}:00.530Z`;
    const endTimeStr = `${date}T${endTime}:00.530Z`;

    const data = {
      sessionLocation: location,
      sessionDate: new Date(sessionDateStr).toISOString(),
      startTime: new Date(startTimeStr).toISOString(),
      endTime: new Date(endTimeStr).toISOString(),
      longitude: longitude,
      latitude: latitude,
    };
    axios
      .post(url_admin, data)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        Swal.fire({
          icon: (response.data.error) ? 'error' : 'success',
          title: (response.data.error) ? response.data.error : response.data.message,
          showConfirmButton: false,
          timer:1500,
        }
        )
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <div className="home-outer">
      <div>
        <NavbarInside />
      </div>
      <div
        className="wrapper wrapper22 wrapper76"
        style={{ marginTop: "200px", zIndex: "0" }}
      >
        <h1 className="heading-settings">Create Session</h1>
        <div className="settings-box">
          <form className="form-duty">
            <div className="row">
              <div className=" col-sm-6">
                <label htmlFor="location">Location : </label>
                <span>
                  <img alt='' className="updater" src={locationping}></img>
                </span>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter duty Location"
                  value={location} required autoComplete="off"
                  onChange={(e) => {myfunc(e.target.value); setLocation(e.target.value)}}
                />
              </div>
              <div className=" col-sm-3">
                <label htmlFor="date">Date : </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Enter duty Date"
                  value={date} required autoComplete="off"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className='col-sm-3'>
                <label htmlFor='photo'> Emergency : </label>
                  <select value={emergency} onChange={(e) => setEmergency(e.target.value)}>
                    <option onClick={() => setEmergency('Yes')}>Yes</option>
                    <option onClick={() => setEmergency('No')}>No</option>
                  </select>
                </div>
            </div>
            <div className="row">
            <div className=" col-sm-6">
                <label htmlFor="latitude">Latitude : </label>
                <span>
                  <img alt='' className="updater" src={earth}></img>
                </span>
                <input
                  type="number"
                  name="latitude"
                  placeholder="Enter latitude"
                  value={latitude} required autoComplete="off"
                />
              </div>
              <div className=" col-sm-6">
                <label htmlFor="longitude">Longitude : </label>
                <span>
                  <img alt='' className="updater" src={earth}></img>
                </span>
                <input
                  type="number"
                  name="longitude"
                  placeholder="Enter longitude"
                  value={longitude} required autoComplete="off"
                />
              </div>

            </div>
            <div className="row">
            <div className=" col-sm-6">
                <label htmlFor="checkpoints"> No. of Checkpoints : </label>
                <span>
                  <img alt='' className="updater updater-session" src={keypad}></img>
                </span>
                <input
                  type="number"
                  name="noOfCheckpoints"
                  placeholder="Enter No. of Checkpoints"
                  value={noOfCheckpoints} required autoComplete="off"
                  onChange={(e) => setNoOfCheckpoints(e.target.value)}
                />
              </div>
              <div className=" col-sm-3">
                <label htmlFor="startTime">Duty Start Time : </label>
                <span>
                  <img alt='' className="updater updater-session" src={time}></img>
                </span>
                <input
                  type="time"
                  name="startTime"
                  placeholder="Enter duty start time"
                  value={startTime} required autoComplete="off"
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
              <div className=" col-sm-3">
                <label htmlFor="endTime">Duty End Time : </label>
                <span>
                  <img alt='' className="updater updater-session" src={time}></img>
                </span>
                <input
                  type="time"
                  name="endTime"
                  placeholder="Enter duty end time"
                  value={endTime} required autoComplete="off"
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <label htmlFor="time"> Description : </label>
                <textarea
                  value={description} autoComplete="off"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <br></br>
            <div className="row">
              <center>
                <input
                  type="submit"
                  value="Create Session"
                  className="btn-sbmt col-sm-6"
                  onClick={onSubmit}
                />{" "}
              </center>
            </div>
            <ul class="bg-bubbles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
