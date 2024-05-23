import React from "react";
import { people } from "./Data";
import getImageUrl from "./utils1";

export default function List() {
    const chemists = people.filter(person =>
        person.profession === 'chemist'
    );
    const listItems = chemists.map(person =>
        <li>
            <img src={getImageUrl(person)} alt={person.name}/>
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>
}


// import React from "react";

// const person = {
//     name: 'Gregorio Y. Zara',
//     theme: {
//         backgroundColor: 'black',
//         color: 'pink'
//     }
// };

// export default function TodoList() {
//     return (
//         <div style={person.theme}>
//             <h1>{person.name}'s Todos</h1>
//             <img
//                 className="avatar"
//                 src="https://i.imgur.com/7vQD0fPs.jpg"
//                 alt="Gregorio Y. Zara"
//             />
//             <ul>
//                 <li>Improve the videophone</li>
//                 <li>Prepare aeronautics lectures</li>
//                 <li>Work on the alcohol-fuelled engine</li>
//             </ul>
//         </div>
//     )
// }