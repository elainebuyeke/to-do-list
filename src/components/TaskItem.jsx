import React from 'react';

function TaskItem({ task, onDelete, onEdit }) {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
      <span>{task.text}</span>
      <div>
        <button onClick={onEdit} className="edit-button">Edit</button>
        <button onClick={onDelete} className="delete-button">Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;