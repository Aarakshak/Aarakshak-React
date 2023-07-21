import "../../assets/css/sos.css";
import police from "../../assets/logos/user-avatar.png";

const SOSCard = (props) => {
  const { policeName, badgeId, duration, location, description } = props;

  return (
    <div className="card">
      <div class="card-body">
        <div style={{display:'flex', flexDirection:'column', textAlign:'left', marginLeft:'0.5vw', marginTop:'1vh'}}>
        <h2 style={{textAlign:'left'}}>{policeName}</h2>
        <h6>{badgeId}</h6>
        </div>
        <div className="ul" style={{ marginTop: '5vh'}}>
            <div class="info-box">
              Location <span>{location}</span>
            </div>
      
          <div class="info-box">
              Duration <span>{duration}</span>
            </div>
         
        </div>
        <p class="card-text" style={{ textAlign: "justify" }}>
          {description}
        </p>
        <a href="#" class="btn btn-default text-uppercase">
          Mark as responded
        </a>
      </div>
      <div class="col-md-4"></div>
    </div>
  );
};

export default SOSCard;
