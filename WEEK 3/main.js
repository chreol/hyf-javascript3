// ---------- //
// COMPONENST //
// ---------- //

let ID = 0;

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
      mode: "view",
      editID: null,
      todoList: []
    };
  }

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  addTodo = e => {
    const inputText = this.state.text;

    this.setState(prevState => ({
      todoList: [
        ...prevState.todoList,
        {
          id: ID++,
          text: inputText,
          date: new Date().toDateString()
        }
      ],
      text: ""
    }));
  };

  editTodo = id => {
    this.setState(prevState => ({
      mode: "edit",
      editID: id,
      text: prevState.todoList.find(todo => todo.id === id).text
    }));
  };

  saveTodo = () => {
    this.setState(prevState => ({
      todoList: [
        ...prevState.todoList.slice(0, prevState.editID),
        {
          id: prevState.editID,
          text: prevState.text
        },
        ...prevState.todoList.slice(prevState.editID + 1)
      ],
      mode: "view",
      editID: null,
      text: ""
    }));
  };

  delTodoItem = i => () => {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter((todo, inx) => i !== inx)
    }));
  };

  render() {
    const { todoList } = this.state;
    if (this.state.mode === "view") {
      return (
        <div className="todo-list">
          <input
            className="todo-list__input"
            type="text"
            placeholder="Enter description"
            value={this.state.text}
            onChange={this.onChange}
          />
          <button className="btn" onClick={this.addTodo}>
            Add
          </button>

          <ul className="todo-list__list">
            {todoList.map((todo, i) => (
              <li key={todo.id}>
                {i + 1} - description: {todo.text} deadline: {todo.date}{" "}
                <button className="btn" onClick={() => this.editTodo(todo.id)}>
                  edit
                </button>
                <button className="btn" onClick={this.delTodoItem(i)}>
                  del
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <input
            className="todo-list__input"
            onChange={this.onChange}
            value={this.state.text}
          />
          <button className="btn" onClick={this.saveTodo}>
            save
          </button>
        </div>
      );
    }
  }
}

// -------- //
// MAIN APP //
// -------- //

const App = () => <TodoList />;

// ---------- //
// RENDER DOM //
// ---------- //

ReactDOM.render(<App />, document.getElementById("root"));