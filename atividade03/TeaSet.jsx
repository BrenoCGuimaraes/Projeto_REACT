
function Cup({ guest }) {
    return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
    <h1>Test</h1>
    let cups = [];
    for (let i = 1; i < 5; i++) {
        cups.push(<Cup key={i} guest={i} />)
    }
    return cups
}
// let guest = 0;

// function Cup() {

//     guest = guest + 1;
//     return <h2>Tea cup for guest #{guest}</h2>;
// }

// export default function TeaSet() {
//     return (
//         <>
//             <Cup />
//             <Cup />
//             <Cup />
//         </>
//     );
// }

// function Cup({ guest }) {
//     return <h2>Tea cup for guest #{guest}</h2>;
// }

// export default function TeaSet() {
//     return (
//         <>
//             <Cup guest={1}/>
//             <Cup guest={2}/>
//             <Cup guest={3}/>
//         </>
//     );
// }

