import "../../assets/css/sos.css";
import NavbarInside from './navbar-inside';
import SOSCard from "./SOS-card";
const SOS = () => {
  return (
    <div className='home-outer-sos'>
      <div>
        <NavbarInside />
      </div>
      <center><h1 className="sos-heading">SOS Received</h1></center>
      <div className="cards">
        <SOSCard
          policeName="Ram Mishra"
          badgeId="12345XXX"
          duration="3 hours"
          location="Delhi"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </div>
  )
}

export default SOS