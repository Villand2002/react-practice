import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';  // uuidをインポートする
//関数コンポーネントはusestateを使用可能

function Todo() {
  const [contents, setContents] = useState([]);

  const todo = (content) => {
    if (content === '') {
      alert("Todoが入力されていません。");
      return;
    }

    const newTodo = {
      id: uuidv4(),
      text: content
    };

    setContents([...contents, newTodo]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    todo(event.target.todoInput.value);
    event.target.reset();
  }

  return (
    <div className="panel">
      <div className="panel-heading">
        todo lists
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todoInput" />
        <button type="submit">Add</button>
      </form>
      {contents.map(content => (
        <label key={content.id} className="panel-block">
          {content.text}
        </label>
      ))}
      <div className="panel-block">
        {contents.length} tasks
      </div>
    </div>
  );
}

export default Todo;
