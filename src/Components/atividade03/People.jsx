import React from "react";

const people = [
    'Creola Katherine Jonhson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function List() {
    const listItems = people.map(person =>
        <li>{person}</li>
    );
    return <ul>{listItems}</ul>
}
// const people = [{
//     id: 0,
//     name: 'Creola Katherine Jonhson',
//     profession: 'mathematician',
// }, {
//     id: 1,
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist',
// }, {
//     id: 2,
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist',
// }, {
//     name: 'Percy Lavon Julian',
//     profession: 'chemist',
// }, {
//     name:'Subrahmanyan Chandrasekhar',
//     profession: 'astrophysicist',
// }];
