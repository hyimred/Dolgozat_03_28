import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/pages/main';
import Tapasztalat from './components/pages/tapasztalat';
import Idopont from './components/pages/idopont';
import Thanks from './components/pages/thanks';

class App extends React.Component {
  render() {
    return <div>
        <header>
          <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>Főoldal</Link>
              </li>
              <li className='nav-item'>
                <Link to='/tapasztalat' className='nav-link'>Szakmai tapasztalat</Link>
              </li>
              <li className='nav-item'>
                <Link to='/idopont' className='nav-link'>Időpontfoglalás</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/tapasztalat' element={<Tapasztalat/>}/>
            <Route path='/idopont' element={<Idopont/>}/>
            <Route path='/koszonjuk' element={<Thanks/>}/>
            <Route path='/*' element={<Navigate to='/'/>}/>
          </Routes>
        </main>
        <footer>
          <h2>Készítette: Csák Patrik</h2>
        </footer>
    </div>
  }
}

export default App;
