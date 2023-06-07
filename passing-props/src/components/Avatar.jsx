import PropTypes from 'prop-types';
import { getImgUrl } from './utils';
export default function Avatar({ person, size }) {
    return (
        <>
            <img
                className="avatar"
                src={getImgUrl(person)}
                alt={person.name}
                width={size}
                height={size}
            />
        </>
    )
}
Avatar.propTypes = {
    person: PropTypes.object.isRequired,
    size: PropTypes.number.isRequired
}