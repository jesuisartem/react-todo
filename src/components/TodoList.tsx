import { useState } from "react";
import TodoItem from "./TodoItem";

export interface ITodoItem {
    title: string;
    order: number;
}

function TodoList() {
    const [items, setCount] = useState<ITodoItem[]>([]);
    const content = items.map(item => <TodoItem item={item}></TodoItem>)
    return (
    <>
        <div>
            {content}
        </div>
        <div>
            {items.length}
        </div>
        <button  onClick={ () => setCount((items) => [...items, { title: `Item ${items.length}`, order: items.length }]) }>Add</button>  
    </>
  )
}

export default TodoList;