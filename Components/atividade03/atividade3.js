import Profile from "./Gallery";
import TodoList from "./TodoList";
import Avatar from './Avatar';
import Scientist from './Scientist';
import Avatar1 from './Avatar1';
import Avatar2 from './Avatar2';
import People from './People';
import Persons from './Persons';
import Recipe from './Recipe';
import Item from "./Item";
import { Link } from "react-router-dom";
import App from "./App";

export default function Atividade3() {
    return (
        <>
            <h1>Atividade 03</h1>
            <Profile />
            <Avatar/>
            <Avatar1/>
            <Avatar2/>
            <People />
            <Persons/>
            <Recipe/>
            <Scientist/>
            <TodoList />
            <Item />
            <App />
            <br />
            <Link to="/">retornar a página inicial</Link>
        </>
    )
}