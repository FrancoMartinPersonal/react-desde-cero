<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
=======
import React  from 'react'
import Curso from './curso'
import './styles/styles.scss'

const App = ( ) => (
    <>
  <div className="main-banner img-container  l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt=""src="https://concepto.de/wp-content/uploads/2015/03/muerte-e1549742739510.jpg"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Muertes  Aseguradas</p>
        <p>muertes aseguradas y asociedados, contactenos para conseguir muertes rápidas</p>
        <a href="https://muerte.com" className="button">Matar</a>
      </div>
    </div>
  </div>
</div>
<div className="ed-grid m-grid-3">
 <Curso/>
 
 </div> 
</>

)
 
>>>>>>> 333f2a0865c54435edd8a3ff6c6d9ce38e0933f7

export default App;
