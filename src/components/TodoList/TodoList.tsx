import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import './TodoList.css'
import type { TodoListItem } from "../../types/TodoListItem.interface";

function TodoList() {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState<TodoListItem[]>([]);
    const content = items.map(item => <TodoItem key={ item.order } item={ item } onToggle={ updateTodoItem }></TodoItem>)

    function addNewTodoItem(newItemValue: string) {        
        setItems((items) => [...items, { id: items.length, title: `${newItemValue}`, order: items.length, done: false }])
        setInputValue('');
    }

    function handleInput(inputElement: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(inputElement.target.value);
    }

    function handleEnterPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            addNewTodoItem(inputValue)
        }
    }

    function updateTodoItem(newItem: TodoListItem) {
        setItems((items) => [...items.map(item => item.id === newItem.id ? newItem : item)]);
    }

    return (
    <>
        <div className="todo-list">
            <div className="todo-list__input">
                <input onKeyDown={ handleEnterPress } type="text" value={ inputValue } onChange={ (e) => handleInput(e) } placeholder="What I need to do..."></input>
                <button onClick={ () => addNewTodoItem(inputValue) }>Add</button>
            </div>
            <div>{ content }</div>
        </div>  
    </>
  )
}

export default TodoList;