import { useState } from "react";
import PropTypes from 'prop-types'
let initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
]

const FixedUpdateArray = () => {
    const [myList, setMyList] = useState(initialList)
    const [yourList, setYourList] = useState(initialList)
    function handleToggleMyList(artId, toggleStatus) {
        myList.map(artwork => {
            if (artwork.id === artId){
                return {...artwork, seen: toggleStatus};
            } else{
                return artwork;
            }
        })
    }
    function handleToggleYourList(artId, toggleStatus) {
        setYourList(
            yourList.map(artwork => {
                if (artwork.id === artId) {
                    return { ...artwork, seen: toggleStatus }
                } else {
                    return artwork;
                }
            })
        )
    }
    return (
        <>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList
                artworks={myList}
                onToggle={handleToggleMyList}
                setList={setMyList}
            />
            <h2>Your list of art to see:</h2>
            <ItemList
                artworks={yourList}
                onToggle={handleToggleYourList}
                setList={setYourList}
            />
        </>
    )
}

export default FixedUpdateArray

function ItemList({ artworks, onToggle, setList }) {
    return (
        <>
            {
                artworks.map(art => (
                    <p key={art.id}>
                        <input
                            type="checkbox"
                            checked={art.seen}
                            onChange={e => {
                                onToggle(
                                    art.id,
                                    e.target.checked
                                )
                            }}
                        />
                        {art.title}
                        <button
                            onClick={() => {
                                setList(
                                    artworks.filter(a =>
                                        a.id !== art.id
                                    )
                                )
                            }}
                        >
                            Delete
                        </button>
                    </p>
                ))
            }
        </>
    )
}

ItemList.propTypes = {
    artworks: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired,
    setList: PropTypes.func.isRequired
}