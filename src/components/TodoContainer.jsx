import React from 'react';
import TodoItem from './TodoItem';

const TodoContainer = (props) => {
  const { todoList, setTodoList } = props;

  const deleteItemHandler = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  const renderedItems = todoList.map((item, index) => {
    return (
      <div key={index}>
        <TodoItem
          item={item}
          todoList={todoList}
          setTodoList={setTodoList}
          deleteItemHandler={() => deleteItemHandler(index)}
        />
      </div>
    );
  });

  return renderedItems;
};

export default TodoContainer;
