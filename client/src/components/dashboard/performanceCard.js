import React from 'react'
import userAvatar from '../../assets/images/userAvatar.png';
import '../../assets/css/analytics.css';

function PerformanceCard(props) {
  return (
    <div className='performance-card'>
      <img src={userAvatar} />
      <div className='officer-data'>
        <div>{props.name}</div>
        <div className='designation-data'>
            <div>{props.badge}</div>
            &nbsp;<div>{props.position}</div>
        </div>
      </div>
    </div>
  )
}

export default PerformanceCard
