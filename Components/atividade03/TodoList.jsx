

//  <img 
// className="avatar"
// src="https://i.imgur.com/7vQD0fPs.jpg" 
// alt="Gregorio Y. Zara" 
// />
//<h1>To Do List for {formatDate(today)}</h1>
// {/* <ul>
// 
// </ul> */}
// {/* <div style={person.theme}>
//                 <h1>{person.name}'s Todos</h1> */}


const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};
export default function TodoList(){
    const name = 'Gregorio Y. Zara';
    return (
        <div atyle={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img 
            className="avatar"
            src="https://i.imgur.com/7vQD0fPs.jpg" 
            alt="Gregorio Y. Zara" 
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
        
    );
}

// export default function TodoList() {
//     return (
//         <>
//             <h1>Hedy Lamarr's Todos</h1>
//             <img
//                 src="https://i.imgur.com/yXOvdOSs.jpg"
//                 alt="Hedy Lamarr"
//                 class="photo"
//             />
//             <ul>
//                 <li>Invent new traffic lights</li>
//                 <li>Rehearse a movie scene</li>
//                 <li>Improve the spectrum technology</li>
//             </ul>
//         </>
//     );
// }

