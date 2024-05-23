import { getImageUrl } from "./utils";
export default function({ person, size}){
    return(
        <img 
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

function Avatar(){
    return(
        <img 
        className="avatar"
        src="https://i.imgur.com/1bX5QH6.jpg" 
        alt="Lin Lanying"
        width={100}
        height={100}
        />
    );
}

export default function Profile(){
    return(
        <Avatar 
            person={{ name: 'Lin Lanying', imageId: '1bX5QH6'}}
            size={100}
        />
    );
}


export default function Avatar(){
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    return(
        <img
        className="avatar"
        src={avatar}
        alt={description}
        />
    );
}

