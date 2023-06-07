import './FollowCursor.css'
import { useState } from 'react'
const FollowCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    function followMouse(e) {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }
    return (
        <div
            className='mainContainer'
            onPointerMove={
                e => {
                    followMouse(e);
                }
            }>
            <div
                className='redDot'
                style={
                    {
                        transform: `translate(${position.x}px, ${position.y}px)`
                    }
                }
            >
            </div>
        </div>
    )
}
export default FollowCursor;