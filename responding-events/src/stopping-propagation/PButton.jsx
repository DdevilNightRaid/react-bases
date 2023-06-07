import ProptTypes from 'prop-types'
export default function PButton({onClick, children}){
    return (
        <button onClick={
            e => {
                e.stopPropagation();
                onClick();
            }
        }>
            {children}
        </button>
    )
}
PButton.propTypes = {
    onClick: ProptTypes.func.isRequired,
    children: ProptTypes.isRequired
}