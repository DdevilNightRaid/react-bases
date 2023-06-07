import PropTypes from 'prop-types';
export default function MainButton({onClick, children}){
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}
MainButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.isRequired
}