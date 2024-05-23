// import Gallery from "./Gallery";
import TodoList from "./TodoList";
import { Link } from "react-router-dom";
import App from "./App";

export default function Atividade3() {
    return (
        <>
            <h1>Atividade 03</h1>
            {/* <Gallery /> */}
            <TodoList />
            <App />
            <br />
            <Link to="/">retornar a página inicial</Link>
        </>
    )
}