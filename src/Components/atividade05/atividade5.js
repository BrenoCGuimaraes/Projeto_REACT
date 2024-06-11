import Regex from "./Regex";
import "./RexBo.css"

import { Link } from "react-router-dom";
export default function Atividade5() {
    return (
        <>
            <h1>Atividade 05</h1>
            <Regex />
            <br />
            <Link to="/">retornar a página inicial</Link>
        </>
    )
}