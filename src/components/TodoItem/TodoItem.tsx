import type { TodoListItem } from '../../types/TodoListItem.interface';
import './TodoItem.css'

interface Props {
    item: TodoListItem;
    onToggle: (item: TodoListItem) => void;
}

function TodoItem({ item, onToggle }: Props) {
    return (
    <>
      <div className="todo-item">
        <div className='todo-item__status'>
          <input onChange={ () => onToggle({ ...item, done: !item.done }) } type='checkbox'></input>
        </div>
        <div className={`
          ${'todo-item__value'}
          ${item.done ? 'todo-item__value_done' : ''}
        `}>{ item.id }. { item.title }</div>
      </div>    
    </>
  )
}

export default TodoItem;