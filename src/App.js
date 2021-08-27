//importações
//blibiotecas
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//componentes
import Home from './Pages/Home';
import Header from './components/Header';
import Ranking from './Pages/Ranking';

//style
import './style/Header.css';
import './App.css';

//documento declarativo
function App() {
  return (
    <div >
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route exact path="/ranking" component={ Ranking } />
      </BrowserRouter>
    </div>
  );
}

//exportação
export default App;