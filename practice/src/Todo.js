import React, { useState } from 'react'

class Todo extends React.Component {
  // functionは単純なJavaScriptの関数.
  // Hooksを使用することで、FunctionコンポーネントでStateやライフサイクルメソッドを使用することもできる.

  // classはrenderが必須である.extends React.Componentを書かなければならない.

  // Reactのコンストラクタは、Classコンポーネントで使用されます。
  // コンストラクタは、クラスがインスタンス化されたときに呼び出されるメソッドで、
  // コンポーネントの状態の初期化や、イベントハンドラーのバインドなどを行うために使用されます。
  // propsをコンストラクタで受け取り,初期化して使用する場合が多い
  const[contents,Setcontent]=useState([])

  
function todo=()=>{
     // 未入力の場合、alert表示
     if (contents === []) {
      alert("Todoが入力されていません。");
      return;
    }
    // 新しいtodoオブジェクトを生成
    const newTodo = {
      id: uuidv4(),
      key: content
    };
    // createTodoの引数にnewTodoを渡す
    createTodo(newTodo);
    // inputの中身を空にする
    Setcontent([]);
  };

  return (
    <div className="panel">
    <div className="panel-heading">
      todo lists
    </div>
    {contents.map(content => (
      <label className="panel-block">
        <input type="text" />
        {content.text}
      </label>
    ))}
    <div className="panel-block">
      {contents.length} tasks
    </div>
  </div>
    );
}

export default Todo