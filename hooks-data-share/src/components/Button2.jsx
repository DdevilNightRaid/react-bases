import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

// Getting the props from App.jsx 
const Button2 = ({ count, onClick }) => {
    return (
        <>
            <Button
                variant="outlined"
                onClick={onClick}
                className='btns'
                sx={
                    {
                        padding: "1rem",
                        fontSize: "1rem",
                        fontWeight: "800"

                    }
                }
            >
                You Clicked: {count} time/s
            </Button>
        </>
    )
}

// Validating prop type for count and onClick 
Button2.propTypes = {
    count: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button2