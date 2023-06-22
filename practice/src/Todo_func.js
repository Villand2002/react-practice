// クラスコンポーネントで書く場合は以下のようになります。ただし、クラスコンポーネントではHooks（useStateなど）は使用できないため、
// 代わりにクラスのstateを使用します。また、イベントハンドラーのthisのバインドにも注意が必要です。

import React from 'react';
import { v4 as uuidv4 } from 'uuid';  // uuidをインポートする

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
    this.todo = this.todo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//   関数が this.props this.state などのコンポーネント属性にアクセスできるようにするには、以下のような対応が必要です。
// onClick={() => this.handleClickItem(index)} のようにアロー関数を利用する
// アロー関数を利用すると1つ上のthisと同じスコープになってくれる
// onClick={this.handleResetItems.bind(this)} のようにbind関数を利用する

  todo(content) {
    if (content === '') {
      alert("Todoが入力されていません。");
      return;
    }

    const newTodo = {
      id: uuidv4(),
      text: content
    };

    this.setState({ contents: [...this.state.contents, newTodo] });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.todo(event.target.todoInput.value);
    event.target.reset();
  }

  render() {
    return (
      <div className="panel">
        <div className="panel-heading">
          todo lists
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="todoInput" />
          <button type="submit">Add</button>
        </form>
        {this.state.contents.map(content => (
          <label key={content.id} className="panel-block">
            {content.text}
          </label>
        ))}
        <div className="panel-block">
          {this.state.contents.length} tasks
        </div>
      </div>
    );
  }
}

export default Todo;
