import React from 'react'

const Todo = ({todo}) => {
  return (
    <div key={todo.id}>
        {todo.title}

    </div>
   
  )
}

export default Todo