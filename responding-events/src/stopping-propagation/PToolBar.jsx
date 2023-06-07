import PButton from "./PButton";
export default function PToolBar(){
    return (
        <div onClick={()=> {alert("You clicked PToolBar")}}>
            <PButton onClick={()=> alert("Playing Movie")}>
                Play Movie
            </PButton>
            <PButton onClick={()=> alert("Playing Song")}>
                Play Song
            </PButton>
        </div>
    )
}