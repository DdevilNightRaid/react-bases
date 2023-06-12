import {useState} from 'react'
const initialItems = [
    { title: 'pretzels', id: 0 },
    { title: 'crispy seaweed', id: 1 },
    { title: 'granola bar', id: 2 }
]
export default function WithDuplication() {
    const [items, setItems] = useState(initialItems)
    const [selectedItem, setSelectedItem] = useState(items[0])
    function handleItemChange(id, iName){
        setItems(
            items.map(item => {
                if(item.id === id){
                    return {
                        ...item,
                        title: iName.target.value
                    }
                } else {
                    return item;
                }
            })
        )
    }
    return (
        <>
            <p>Example of Duplication in State:</p>
            <h1>What&apos;s your travel snack?</h1>
            <ul>
                {
                    items.map((item) => (
                        <li key={item.id}>
                            <input
                                type="text"
                                value={item.title}
                                onChange={ e => handleItemChange(item.id, e)}
                            />
                            <button
                                onClick={() => {setSelectedItem(item)}}
                            >
                                Choose
                            </button>
                        </li>
                    ))
                }
            </ul> 
            <h3>You picked: {selectedItem.title}</h3>
        </>
    )
}