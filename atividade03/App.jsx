// import Gallery from '.Gallery.jsx';
//1
// import { Profile } from './Gallery.jsx';

//2
import { getImageUrl } from './utils.jsx';

// //1
// export default function App(){
//   return(
//     <Profile /> //ou Gallery
//   );
// }
//2
function Avatar({ person, size}){
    return(
        <img 
        className='avatar'
        src={getImageUrl(person)}
        alt={person.name} 
        width={size}
        height={size}
        />
    );
}

export default function Profile(){
    return(
        <div>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
            <Avatar
                size={80}
                person={{
                    name: 'Aklilu Lemma',
                    imageId: 'OKS67lh'
                }}
            />
            <Avatar
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />
        </div>
    );
}