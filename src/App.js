import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente.js';
import Propiedades from './components/Propiedades.js';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
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

        <section>
          <Componente />
          <hr />
          <Propiedades
            cadena="Cadena de texto"
            numero={21} booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "Jon", correo: "jon@gmail.com" }}
            elementoReact={<i>Esto es un elemento React</i>}
            funcion={(num) => num * num}
            componenteReact={<Componente />}
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
        </section>
      </header>
    </div>
  );
}
export default App;
