import { useState } from 'react';
import { initialTravelPlan } from './places.js';
import PropTypes from 'prop-types';
export default function NotDeeply() {
    const [plan, setPlan] = useState(initialTravelPlan);
    function handleComplete(parentId, childId) {
        const parent = plan[parentId];
        // Create a new version of parent place
        // that doesn't include the child id
        const nextParent = {
            ...parent,
            childIds: parent.childIds
                .filter(id => id !== childId)
        };

        // update the root state object...
        setPlan({
            ...plan,
            [parentId]: nextParent
        });
    }
    const root = plan[0];
    const planetIds = root.childIds;
    return (
        <>
            <h2>Places to visit</h2>
            <ol>
                {planetIds.map(id => (
                    <PlaceTree
                        key={id}
                        id={id}
                        parentId={0}
                        placesById={plan}
                        onComplete={handleComplete}
                    />
                ))}
            </ol>
        </>
    )
}

function PlaceTree({ id, parentId, placesById, onComplete }) {
    const place = placesById[id];
    const childIds = place.childIds;
    return (
        <li>
            {place.title}
            <button
                onClick={() => {
                    onComplete(parentId, id);
                }}
            >
                Visited
            </button>
            {
                childIds.length > 0 &&
                <ol>
                    {
                        childIds.map(childId => (
                            <PlaceTree
                                key={childId}
                                id={childId}
                                parentId={id}
                                placesById={placesById}
                                onComplete={onComplete}
                            />
                        ))

                    }
                </ol>

            }
        </li>
    )
}

PlaceTree.propTypes = {
    id: PropTypes.number.isRequired,
    parentId: PropTypes.number.isRequired,
    placesById: PropTypes.isRequired,
    onComplete: PropTypes.isRequired
}