import Carrinho from './Carrinho';
import { Link } from "react-router-dom";
export default function Atividade6() {
    return (
        <>
            <h1>Atividade 06</h1>
            <Carrinho />
            <br />
            <Link to="/">retornar a página inicial</Link>
        </>
    )
}