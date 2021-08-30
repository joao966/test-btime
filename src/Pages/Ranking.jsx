//importações
//bibliotecas
import React, { useState } from 'react';

//services
import countries from '../Services/FilterCountries';

//imagens
import iconSearch from '../assets/search.png';

//style
import '../style/Ranking.css';

//componentes
import Card from '../Components/Card';

//documento declarativo
function Ranking() {

  const [ inputValue, setInputValue ] = useState('');

  const handleChange = ({target: { value }}) => {
    setInputValue(value);
  }

  return (
    <div className='center'>

      <header className="inputSearch header ">
        <p className="paragraph">Pesquise um país pela sigla</p>
        <img className="search" src={iconSearch} alt="" />
        <input onChange={ handleChange } placeholder="Ex: USA" type="text" />
      </header>
      
      {
        countries.sort((a, b) => b.total - a.total).filter((country) => country.pais.includes(inputValue.toUpperCase())).map((country, index) => (
          <Card key={index} country={country} />
        ))
      }
    </div>
  );
}

//exportação
export default Ranking;
