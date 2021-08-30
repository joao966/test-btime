import React from 'react';
import countries from '../Services/FilterCountries';

import CardAthleta from '../Components/CardAthleta';


function Athletas({location: { state: { country: { pais } } }}) {
  return (
    <div className="center">
      <div className="d">
        <h1>Atletas</h1>
      </div>
      {
        countries.map((countrie) => {
          if (pais === countrie.pais) {
            return countrie.atletas.map((athleta, index) => (
              <CardAthleta key={index} athleta={athleta} />
            ))  
          }
          return null;
        })
      }
    </div>
  )
}

export default Athletas;
