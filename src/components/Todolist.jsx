import React from 'react'
import Todo from './Todo'

const Todolist = ({todos,title}) => {
    console.log(todos,title)

    let newTodos = todos.map(todo => {
  return (
    <Todo key={todo.id} todo= {todo}/>
  )
})
return(
    <>
    {newTodos}</>
)
}

export default Todolist