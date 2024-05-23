
import React from "react";

function Item({name,isPacked}) {
    if (isPacked) {
        return <li className="item">{name} ✔</li>
    }
    return <li className="item">{name} </li>
    
}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item isPacked={true} name="Space suit"/>
                <Item isPacked={true} name="Helemt with a golden leaf"/>
                <Item isPacked={false} name="Photo of Tam"/>
            </ul>
        </section>
    );
}

// import React from "react";

// function Item({ name, isPacked}){
//     let itemContent = name;
//     if(isPacked){
//         itemContent = (
//             <del>
//                 {name + "✔"}
//             </del>
//         );
//     }
//     return (
//         <li className="item">
//             {itemContent}
//         </li>
//     );
// }
// export default function PackingList(){
//     return (
//         <section>
//             <h1>Sally Ride's Packing List</h1>
//             <ul>
//                 <item
//                 isPacked={true}
//                 name="Space suit"
//                 />
//                 <Item
//                 isPacked={true}
//                 name="Helmet with a golden leaf"
//                 />
//                 <Item
//                 isPacked={true}
//                 name="Photo of tam"
//                 />
//             </ul>
//         </section>
//     )
// }