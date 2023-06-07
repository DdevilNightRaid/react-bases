import PropTypes from 'prop-types';
export default function AlertButton( {message, children } ){
    return (
        <button onClick={()=>{alert(message)}}>
            {children}
        </button>
    )
}
AlertButton.propTypes = {
    message: PropTypes.string.isRequired,
    children: PropTypes.isRequired
}