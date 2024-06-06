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
                    <li>
                        <Link to="/atividade03">Atividade 3</Link>
                    </li>
                    <li>
                        <Link to="/atividade04">Atividade 4</Link>
                    </li>
                    <li>
                        <Link to="/atividade05">Atividade 5</Link>
                    </li>
                    {/* <li>
                        <Link to="/atividade06">Atividade 6</Link>
                    </li> */}
                </ul>
            </nav>
        </>
    );
}

export default Home;
