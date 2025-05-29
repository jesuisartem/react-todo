import type { ITodoItem } from "./TodoList";

interface Props {
    item: ITodoItem;
}

function TodoItem({ item }: Props) {
    return (
    <>
      <div>
        {item.title}
      </div>    
    </>
  )
}

export default TodoItem;