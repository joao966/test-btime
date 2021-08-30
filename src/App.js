//importações
//blibiotecas
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//componentes
import Home from './Pages/Home';
import Ranking from './Pages/Ranking';
import Athletas from './Pages/Athletas'
import Header from './Components/Header';
import Footer from './Components/Footer';

//style
import './style/Header.css';
import './App.css';

//documento declarativo
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route exact path="/ranking" component={ Ranking } />
        <Route exact path="/ranking/:country/athletas" component={ Athletas } />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

//exportação
export default App;