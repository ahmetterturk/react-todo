import React, { useState } from 'react';
import TodoContainer from './components/TodoContainer';
import InputForm from './components/InputForm';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState('');

  return (
    <div>
      <InputForm
        input={input}
        todoList={todoList}
        setTodoList={setTodoList}
        setInput={setInput}
      />
      <TodoContainer todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
