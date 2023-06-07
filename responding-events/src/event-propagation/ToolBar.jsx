export default function ToolBar(){
    return (
        <div onClick={()=>{alert("Clicked ToolBar")}}>
            <button onClick={()=>{alert("Clicked Play Movie")}}>
                Play Movie
            </button>
            <button onClick={()=>{alert("Clicked Play Song")}}>
                Play Song
            </button>
        </div>
    )
}