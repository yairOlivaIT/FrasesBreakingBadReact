import React , { useState , useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';


const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;

  @media (max-width: 767px) {
    padding: .9rem;
    margin-top: -10rem;
  }
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover{
    cursor: pointer;
    background-size: 800px;
  }
`;

function App() {
  //state de Frases
  const [ frase , guardarFrase ] = useState({});

  const consultarApi = async ()=>{
    //De esta forma con async await
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    
    guardarFrase(frase[0]);

    //cuando una promise con pending tengo que poner doble then, de esta forma seria con fetch promise
    // const api = fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    // const frase = api.then( respuesta => respuesta.json())
    // frase.then(resultado => console.log(resultado))
    // .catch(error => {
    //   console.log(error)
    // }) 
  }

  //Cargar una frase , carga automaticamente una frase eso hace en este caso useEffect
  useEffect (() => {
    consultarApi();
  },[]);

  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton
        onClick={consultarApi}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;


//consultarApi asi sin nada espera al que usuario haga click
//consultarApi() asi se ejecuta cuando carga la pagina
//() => consultarApi() espera que el usuario haga click