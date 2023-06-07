// import { useState } from "react";
import { useImmer } from 'use-immer';
let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
];
const TransformArray = () => {
    // const [shapes, setShapes] = useState(initialShapes)
    const [shapes, setShapes] = useImmer(initialShapes)
    const handleClick = () => {
        // const newShapePositions = shapes.map( shape => {
        //     if (shape.type === 'square') {
        //         return shape;
        //     } else {
        //         return {
        //             // ...shape,
        //             // y: shape.y + 50

        //         }
        //     }
        // })
        // setShapes(newShapePositions);

        // Immer method: 
        setShapes( draft => {
            draft.forEach( shape => {
                if(shape.type !== 'square'){
                    shape.y += 50
                }
            })
        })
    }
    return (
        <>
            <button onClick={handleClick}>
                Move circles down!
            </button>
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    style={{
                        background: 'purple',
                        position: 'absolute',
                        left: shape.x,
                        top: shape.y,
                        borderRadius:
                            shape.type === 'circle'
                                ? '50%' : '',
                        width: 20,
                        height: 20,
                    }} />
            ))}
        </>
    )
}
export default TransformArray;