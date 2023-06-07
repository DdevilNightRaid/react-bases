import MainButton from "./MainButton";
export default function PlayButton(){
    function handlePlayMovie(){
        alert("Playing movie")
    }
    return (
        <MainButton onClick={handlePlayMovie}>
            Play Movie
        </MainButton>
    )
}