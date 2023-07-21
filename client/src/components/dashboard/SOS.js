import "../../assets/css/sos.css";
import NavbarInside from './navbar-inside';
import SOSCard from "./SOS-card";
const SOS = () => {
    return(
        <div className='home-outer-sos' style={{display:'flex', flexDirection:'column'}}>
        <div>
          <NavbarInside />
        </div>
        <center><h1 style={{ marginTop: '200px', color:'white' }}>SOS Received</h1></center>
        <div style={{margin:'3vh'}}>
        <SOSCard
        policeName="Ram Mishra"
        badgeId="12345XXX"
        duration="3 hours"
        location="Delhi"
        description="A stranger with a black bagpack, is constantly travelling by the police station, overlooking to follow me"
      />
        </div>
     </div>
)}

export default SOS