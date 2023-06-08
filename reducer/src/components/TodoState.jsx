import { useState } from 'react';

const TodoState = () => {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoText.length < 4) {
      alert('Lüftfen 4 harften uzun bir şey yazın');
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      title: todoText,
    };
    // yeni todoyu diziye aktarma
    setTodos([...todos, newTodo]);
    // formu temizle
    setTodoText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={todoText}
          onChange={handleChange}
          type="text"
        />
        <button>Gönder</button>
      </form>
      <br />
      <br />
      <br />
      <ul>
        {todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoState;
