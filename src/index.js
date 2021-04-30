import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = document.getElementById('root')
// const elemento = React.createElement("H1",{className:
// "saludo"},"hola Mundo!")
/*el metodo crateElement me permite crear un elemento
para poder insertarlo y renderizarlo en pantalla, el mismo
recibe 3 parámetros
1- el componente como tal que quiero crear
2- las pripiedades que va a tener
3- todos los hijos que va a tener el elemento
 */
ReactDOM.render(<App/>,root);

reportWebVitals();
