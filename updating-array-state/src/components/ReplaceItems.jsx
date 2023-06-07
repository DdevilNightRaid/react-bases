import { useState } from "react"

let inisitalState = [0, 0, 0]
export default function RepalceItems() {
    const [conuters, setCounter] = useState(inisitalState)
    function handleClick(index) {
        const updatedState = conuters.map((c, i) => {
            if (i === index) {
                return c += 1;
            } else {
                return c;
            }
        })
        setCounter(updatedState);
    }
    function handleReverse() {
        const reversedArray = [...conuters];
        reversedArray.reverse();
        setCounter(reversedArray);
    }
    return (
        <>
            {
                conuters.map((counter, i) => (
                    <p key={i}>
                        {counter} 
                        <button
                            onClick={() => { handleClick(i) }}
                        >
                            + 1
                        </button>
                    </p>
                ))
            }
            <button
                onClick={handleReverse}
            >
                Reverse it
            </button>
        </>
    )
}