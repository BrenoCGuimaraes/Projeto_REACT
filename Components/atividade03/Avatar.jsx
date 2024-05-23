import React from 'react';

export default function Avatar() {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    return (
        <img 
        className='avatar'
        src={avatar}
        alt={description}
        />
    );
}
// export default function Profile(){
//     return(
//         <Avatar 
//             person={{ name: 'Lin Lanying', imageId: '1bX5QH6'}}
//             size={100}
//         />
//     );
// }


// export default function Avatar(){
//     const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
//     const description = 'Gregorio Y. Zara';
//     return(
//         <img
//         className="avatar"
//         src={avatar}
//         alt={description}
//         />
//     );
// }

