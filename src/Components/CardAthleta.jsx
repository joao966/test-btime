import React from 'react';

import iconAthlete from '../assets/medalha-de-honra.png';
import iconmedal from '../assets/atletismo.png';

function CardAthleta({athleta}) {
  return (
    <div className="content-infer-card-athleta">
      <div className="contentAthlete zoom">
        <img className="medalAthlete" src={iconAthlete} alt="" />
        <p>{ athleta.athlete }</p>
      </div>
      <div className="contentAthlete zoom">
        <img className="medalAthlete" src={iconmedal} alt="" />
        <p>{ athleta.medal }</p>
      </div>
    </div>
  )
}

export default CardAthleta;
