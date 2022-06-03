import React from 'react'
import Title from './components/Title'
import TodoList from './components/TodoList'
import { TodoProvider } from './context/TodoProvider'
import { useTodos } from './hooks/useTodos'

const Todo = () => {
  // Has Undefined - Not Context => const { pendingTodos } = useTodos();
  return (
    <TodoProvider>
        <Title />
        <TodoList />
    </TodoProvider>
  )
}

export default Todo