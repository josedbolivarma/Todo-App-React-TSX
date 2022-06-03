import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos"
import { Todo } from "../interfaces/interfaces"

interface TodoItemProps {
    todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {
  
//   const { toggleTodo } = useContext( TodoContext );

  const { toggleTodo } = useTodos();
 
    return (
      <li
      style={{
          cursor: 'pointer',
          textDecoration: todo.completed? 'line-through' : ''
      }}
      onDoubleClick={() =>     toggleTodo( todo.id )}
      >
          {
              todo.desc
          }
      </li>
  )
}

export default TodoItem