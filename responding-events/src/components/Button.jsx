export default function Button() {
    function handleClick(){
        alert("clicked me")
    }
    return (
        <button onClick={handleClick}>
            I don&apos;t do anything
        </button>
    )
}