import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login'
import PaginaInicial from './PaginaInicial';
import Shop from './components/pages/Shop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // atributos para rotas de páginas
import './App.css';

function App() {
    return (
      <div>
        <Home/>
      </div>
    );
  } 

export default App;