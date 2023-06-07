import { useState } from "react";
let initialTodo = [
    { id: 1, todo: "Make it work" },
]
let index = 1;
export default function TodoList() {
    const [addTodo, setAddTodo] = useState('');
    const [todos, setTodos] = useState(initialTodo);
    function handleChange(nTodo) {
        setAddTodo(nTodo.target.value);
    }
    const handleClick = () => {
        const updatedTodo = [
            ...todos,
            { id: index++, todo: addTodo },
        ]
        setTodos(updatedTodo);
        setAddTodo('');
    }
    return (
        <>
            <div>
                <h1>Add Todo:</h1>
                <input
                    type="text"
                    value={addTodo}
                    onChange={(newTodo) => { handleChange(newTodo) }}
                />
                <button onClick={handleClick}>Add Todo</button>
            </div>
            <section>
                <h3>List of Todos:</h3>
                <section>
                    {
                        todos.map(todoL => (
                            <>
                                <p key={todoL.id}>{todoL.id}. {todoL.todo}</p>
                                <button
                                    onClick={() => {
                                        setTodos(
                                            todos.filter(dTodo => (
                                                dTodo.id !== todoL.id
                                            ))
                                        )
                                    }}
                                >
                                    Delete
                                </button>
                            </>
                        ))
                    }
                </section>
            </section>
        </>
    )
}