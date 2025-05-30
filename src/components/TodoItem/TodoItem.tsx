import { useState } from 'react';
import type { TodoListItem } from '../../types/TodoListItem.interface';
import './TodoItem.css'
import { FaPen } from "react-icons/fa";

interface Props {
    item: TodoListItem;
    onToggle: (item: TodoListItem) => void;
}

function TodoItem({ item, onToggle }: Props) {
    const [isEditing, setEditing] = useState(false);
    return (
    <>
      <div className="todo-item">
        <div className='todo-item__status'>
          <input className='status-checkbox' onChange={ () => onToggle({ ...item, done: !item.done }) } type='checkbox'></input>
        </div>
        {
          !isEditing 
            ? <div className={`${'todo-item__value'} ${item.done ? 'todo-item__value_done' : ''}`}>
                { item.title }
              </div>
            : <input className='todo-item__input' onChange={ (e) => onToggle({ ...item, title: e.target.value }) } type='text'></input>
        }
        <div className='todo-item__editing-toggle'>
          <button onClick={ () => setEditing(() => !isEditing) } type='button'>
            <FaPen size={ '1rem' }></FaPen>
          </button>
        </div>
      </div>    
    </>
  )
}

export default TodoItem;