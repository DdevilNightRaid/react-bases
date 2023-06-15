import {useState} from 'react';
import PropTypes from 'prop-types'
export default function AddItem( { onAddItem } ){
    const [title, setTitle] = useState('');
    return (
        <>
            <input 
                type="text"
                placeholder='Add Item'
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button
                onClick={() => {
                    setTitle('');
                    onAddItem(title)
                }
                }
            >
                Add
            </button>
        </>
    )
}

AddItem.propTypes = {
    onAddItem: PropTypes.func.isRequired
}