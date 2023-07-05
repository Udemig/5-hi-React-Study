import axios from 'axios';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const AddForm = () => {
  // dispatch methodunu kurmak
  const dispatch = useDispatch();
  // abone olma
  const store = useSelector((store) => store.todoReducer);

  const [text, setText] = useState('');

  // form gönderilidğinde veriyi store'a aktar
  const handleSubmit = (e) => {
    e.preventDefault();
    // todo'yla alakalı bilgileri içeren bir obje oluştur
    const newTodo = {
      id: new Date().getTime(),
      text,
      isDone: false,
      date: new Date(),
    };

    // oluşan objeyi apiye aktarma
    axios
      .post('http://localhost:3060/todos', newTodo)
      .then(() => {
        //  apiye aktarım olursa stoe'u güncelleme
        dispatch({
          type: 'ADD_TODO',
          payload: newTodo,
        });
      })
      .catch((err) =>
        alert(
          'Üzgünüz, sunucularımızdaki hatadan dolayı işlem gerçekleştirilemiyor :('
        )
      );
  };

  // Tümünü sil butonına tıklanınca çlışır:
  const handleClear = () => {
    store.todos.forEach((todo) =>
      axios.delete(`http://localhost:3060/todos/${todo.id}`)
    );
    dispatch({
      type: 'CLEAR',
    });
  };

  return (
    <>
      <form
        className="d-flex  align-items-center justify-content-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button>Ekle</button>
      </form>
      <button className="bg-danger" onClick={handleClear}>
        Tümünü Sİl
      </button>
    </>
  );
};

export default AddForm;
