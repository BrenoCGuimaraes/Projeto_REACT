import Relogio  from './Relogio';
import Letreiro from './Letreiro';
import { Link } from "react-router-dom";
// import React from 'react';

export default function Atividade1() {
    return (
        <>
            <h1>Atividade 01</h1>
            <Relogio />
            <Letreiro  />
            <br />
            <Link to="/">retornar a página inicial</Link>
        </>
    )
}
