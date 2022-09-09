import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';

import './App.css';
import { Menu } from './components/Menu';
import { Contatos } from './pages/Contatos';
import { Home } from './pages/Home';
import { Servicos } from './pages/Serviços';



function App() {
  return (
    <>
   <BrowserRouter> {/**rotear no navegador */}
   <Routes> {/**rotas */}
    <Route path='/' element = {<Home/>}/> {/**é a rota */}
    <Route path='/Servicos' element = {<Servicos/>}/>   
    <Route path='/Contatos' element = {<Contatos/>}/>   
    
   
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
