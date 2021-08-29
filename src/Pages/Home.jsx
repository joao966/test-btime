// importações
//bibliotecas
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//gerenciador de estado
//ações
import { saveName } from '../Redux/actions';

//estyle
import '../style/Home.css';


//documento declarativo
function Home({saveName}) {
  const [ inputValue, setInputValue ] = useState('');

  const handleChange = ({target: {value}}) => {
    setInputValue(value);
  }

  const handleClick = () => {
    saveName(inputValue);
  }

  return (
    <div className="content">
      <div className="text">
        <h1>Ranking de Medalhas!</h1>
          <p>Digite seu nome:</p>
          <input onChange={handleChange} type="text" />
        <Link className="link" onClick={handleClick} to="/ranking">Entrar</Link> 
      </div>
      <div className="img">
        <img src="https://www.pikpng.com/pngl/b/87-876380_esporte-e-lazer-png-.png" alt=""/>
      </div>
    </div>
  )
}

//gerenciador de estado
//dipararo de ações
const mapDispatchToProps = (dispatch) => ({
  saveName: (name) => dispatch(saveName(name))
})

//exportação
export default connect(null, mapDispatchToProps)(Home);
