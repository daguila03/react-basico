import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Componente from './components/Componente.js';
// import Propiedades from './components/Propiedades.js';
// import Estado from './components/Estado';
// import RenderizadoCondicional from './components/RenderizadoCondicional';
// import RenderizadoElementos from './components/renderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';
import Padre from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
// import AjaxApis from './components/AjaxApis';
// import ContadorHooks from './components/ContadorHooks';
// import ScrollHooks from './components/ScrollHooks';
// import RelojHooks from './components/RelojHooks';
// import AjaxHooks from './components/AjaxHooks';
// import HooksPersonalizados from './components/HooksPersonalizados';
// import Referencias from './components/Referencias';
// import Formularios from './components/Formularios';
// import Estilos from './components/Estilos';
import ComponentesEstilizados from './components/ComponentesEstilizados';

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
          {/* <ContadorHooks /> */}
          {/* <hr />
          <ScrollHooks /> */}
          {/* <hr />
          <RelojHooks /> */}
          {/* <hr />
          <AjaxHooks /> */}
          {/* <hr />
          <HooksPersonalizados /> */}
          {/* <hr />
          <Referencias /> */}
          {/* <hr />
          <Formularios /> */}
          {/* <hr />
          <Estilos /> */}
          <hr />
          <ComponentesEstilizados />
          {/* <Componente />
          <hr />
          <Propiedades
            cadena="Cadena de texto"
            numero={21} booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "Jon", correo: "jon@gmail.com" }}
            elementoReact={<i>Esto es un elemento React</i>}
            funcion={(num) => num * num}
            componenteReact={<Componente />}
          /> */}
          {/* <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos /> */}
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <Padre />
          <hr />
          <CicloVida />
          {/* <hr />
          <AjaxApis /> */}
        </section>
      </header>
    </div>
  );
}
export default App;