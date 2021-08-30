import React from 'react';
import { Link } from 'react-router-dom';

import iconGold from '../assets/medalha-de-ouro.png';
import iconSilver from '../assets/medalha-de-prata.png';
import iconBronze from '../assets/medalha-de-bronze.png';
import iconSum from '../assets/podio.png';
import iconCountry from '../assets/world-globe.png';

function Card({country}) {


  return (
    <div className="content-infer-card zoom" >
              <div className="contentGold">
                <img className="medalCountry" src={iconCountry} alt="country" />
                <span><strong>País:</strong> {country.pais}</span>
              </div>
              <div className="contentGold">
                <img className="medalGold" src={iconGold} alt="gold" />
                <p> { country.ouro }</p>
              </div>
              <div className="contentGold ">
                <img className="medalSilver" src={iconSilver} alt="silver" />
                <p > { country.prata }</p>
              </div>
              <div className="contentGold">
                <img className="medalBronze" src={iconBronze} alt="bronze" />
                <p>{ country.bronze }</p>
              </div>
              <div className="contentGold">
                <img className="medalTotal" src={iconSum} alt="total" />
                <p>{ country.total }</p>
              </div>
              <Link className="link" to={ {
                  pathname: `/ranking/${country}/athletas`,
                  state: { country },
            }}>
              Ver Atletas
            </Link>
            </div>
  )
}

export default Card;
