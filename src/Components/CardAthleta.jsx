import React from 'react';

import iconMedal from '../assets/medalha-de-honra.png';
import iconAthlete from '../assets/atletismo.png';

function CardAthleta({athleta}) {
  return (
    <div className="content-infer-card-athleta zoom">
      <div className="contentGold">
        <img className="medalAthlete" src={iconAthlete} alt="athleta" />
        <p>{ athleta.athlete }</p>
      </div>
      <div className="contentGold">
        <img className="medalAthlete" src={iconMedal} alt="athleta" />
        <p>{ athleta.medal }</p>
      </div>
    </div>
  )
}

export default CardAthleta;
