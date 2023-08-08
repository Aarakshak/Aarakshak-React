// import Map, {Marker} from 'react-map-gl';
// import React, {useState, useEffect, useRef} from 'react';

// const[lat,setLat] = useState();
// const[long,setLong] = useState();

// const getLocation =  () => {
//     if (navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition(showPosition);
//     } 
//   }
  
//   const showPosition = (position) => {
//     setLat(position.coords.latitude);
//     setLong(position.coords.longitude);
//   }

//   useEffect(() => {
//     getLocation();
//   },[])

// const Map = () => {

//   return (
//     <>
//       <div id="login" className="modal-window">
//         <div>
//           <a href="#" title="Close" className="modal-close">
//             X
//           </a>
//           <h1>MAP</h1>
//             <div className='mapper'>

//             </div>
//           <p>
//             {error && <div className="error-message">{error}</div>}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Map;
