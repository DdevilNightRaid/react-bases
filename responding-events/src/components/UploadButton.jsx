import PropTypes from 'prop-types';
import MainButton from "./MainButton";
export default function UploadButton({message}){
    function handleUploadImg(){
        alert("Uploading Img");
    }
    return (
        <MainButton onClick={handleUploadImg}>
            {message}
        </MainButton>
    )
}
UploadButton.propTypes = {
    message: PropTypes.string.isRequired
}