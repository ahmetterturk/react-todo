import React from 'react';

const InputForm = (props) => {
  const { input, setInput, todoList, setTodoList } = props;

  const submitHandler = (event) => {
    event.preventDefault();
    const updatedTodoList = [...todoList];
    updatedTodoList.unshift(input);
    setTodoList(updatedTodoList);
    setInput('');
  };

  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          onChange={onChangeHandler}
          placeholder="Learn React"
        />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
};

export default InputForm;
