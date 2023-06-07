import { getImageUrl } from "./utils";
import { people } from './data.jsx'

export default function ListPeople() {
    // const listItems = people.map(person => <li>{person}</li>);
    const chemists = people.filter(person =>
        person.profession === 'chemist'
    );
    const listItems = chemists.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}</b>
                {' ' + person.profession + ' '} known for {person.accomplishment}
            </p>
        </li>
    );
    return (
        <>
            <ul>{listItems}</ul>
        </>
    )
}