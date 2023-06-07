import { useState } from 'react';
import { sculptureList } from './data.js';
export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleClick() {
        let superIndex = index + 2
        setIndex(index + 1);
        if (superIndex > sculptureList.length) {
            setIndex(index * 0)
        }
    }
    function handlePrevious(){
        setIndex(index - 1)
        // console.log((index - 1 + sculptureList.length) % sculptureList.length)
        // setIndex()
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <button onClick={() => { setShowMore(!showMore) }}>
                {showMore ? 'Hide' : 'Show'} Details
            </button>
            {
                index > 0
                &&
                <button onClick={handlePrevious}>
                    Previous
                </button>
            }
            <p>
                {showMore && sculpture.description}
            </p>
        </>
    );
}