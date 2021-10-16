import React, { useEffect } from 'react';

const TodoItem = (props) => {
  const { item, index, todoList, setTodoList, deleteItemHandler } = props;

  return (
    <div>
      <p>{item}</p>
      <input type="submit" value="Delete" onClick={deleteItemHandler} />
    </div>
  );
};

export default TodoItem;
