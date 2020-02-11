import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    margin-top:11rem;

    @media (max-width:768px){
        margin-top: -10rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        /* Creando pseudo elemento , el & hace referencia al h1 */
        &::before {
            content: open-quote;
            font-size: 6rem;
            color: black;
            position: absolute;
            top: -2rem;
            left: -1rem;

        }
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.2rem;
        text-align: right;
        color: #666;
        margin-top: 1rem;
        font-weight: bold;
    }
`;

const Frase = ({frase}) => {


    //para saber si el objeto tiene cierta informacion dentro usamos asi
    //if(Object.keys(frase).length === 0 ) return null;

    return (
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p> - {frase.author}</p>
        </ContenedorFrase>
    );
}
 
export default Frase;