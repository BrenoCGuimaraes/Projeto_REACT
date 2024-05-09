import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return (
        <>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/atividade01">Atividade 1</Link>
                    </li>
                    <li>
                        <Link to="/atividade02">Atividade 2</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Home;
