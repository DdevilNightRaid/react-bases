import PropTypes from 'prop-types'
export default function Clock(props){
    let color = props.color;
    return (
        <>
            <h1 style={{color: color}}>
                {props.time}
            </h1>
        </>
    )
}
Clock.propTypes = {
    props: PropTypes.isRequired,
    color: PropTypes.string.isRequired,
    time: PropTypes.isRequired

}