import {useState} from 'react';
import './App.css';
import {nanoid} from 'nanoid';

function App() {
  const id = nanoid(10);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = e => {
    const textValue = e.target.value;
    setText(textValue);
  };

  const handleSubmit = () => {
    setTodos(todo => [...todo, {text, id}]);
    setText('');
  };

  const handleRemoveTodo = value => {
    const todoResult = todos.filter(todo => todo.id !== value);
    setTodos(todoResult);
  };

  return (
    <div className="App">
      <div className="input-container">
        <div className="input-inner-container">
          <input
            type="text"
            placeholder="Add A New Todo Here"
            value={text}
            onChange={handleChange}
          />
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
        <div className="todo-container">
          <h4 className="todo-header">Your Todos ({todos?.length})</h4>
          <div className="todo-inner-container">
            {todos?.map((todo, index) => (
              <div
                key={todo?.id}
                className="todos"
                onClick={() => handleRemoveTodo(todo?.id)}>
                <div>{todo?.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
