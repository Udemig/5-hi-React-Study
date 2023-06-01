import axios from 'axios';

import { useEffect, useState, useRef } from 'react';
import EditModal from './components/EditModal';

// axiosu özelleştirme
axios.defaults.baseURL = 'http://localhost:3030';

function App() {
  const [todos, setPosts] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState({});

  // 1.yol useState
  const [todoText, setTodoText] = useState('');
  // 2.yol useRef
  const inputRef = useRef();

  // bileşen ekrana geldiği anda fonksiyonu çalıştırır
  useEffect(() => {
    // kendi oluştuduğumuz apiye get isteği atma
    axios
      .get('/todos')
      // gelen veriyi state aktarma
      .then((res) => setPosts(res.data));
  }, []);

  // gönder butonuna tıklandığı an çalışır
  const handleSubmit = (e) => {
    e.preventDefault();
    // 1- apiye göndericeğim objeyi hazırlma
    const newTodo = {
      id: new Date().getTime(),
      title: todoText,
      date: new Date().toLocaleString(),
      isDone: false,
    };
    // 2- hazırlanan objeyi apiye gönderme
    axios
      .post('/todos', newTodo)
      // apiye başarılı şekilde eklendiyse state'e de ekle
      .then(() => setPosts([...todos, newTodo]));

    // inputu temizleme
    inputRef.current.value = '';
    // inputa odaklanma
    inputRef.current.focus();
  };

  // sil butonuna basıldığında çalışır
  const handleDelete = (id) => {
    axios
      .delete(`/todos/${id}`)
      // eğer apiden silinirse state'den de sil
      .then(() => {
        // silinecek todoyoyu diziden çıkartma
        const filtred = todos.filter((todo) => todo.id !== id);
        setPosts(filtred);
      });
  };

  // checboxa tıklanınca çalışır
  const handleEdit = (todo) => {
    // gönderilecek objenin güncel halini hazırla
    var updatedTodo = { ...todo, isDone: !todo.isDone };

    // güncel hali apiye gönder
    axios
      .put(`/todos/${todo.id}`, updatedTodo)
      // api güncellenirse state'i güncelle
      .then(() => {
        // kopya oluşturma
        const cloneTodos = [...todos];

        // elemanın sırasını bul
        const index = cloneTodos.findIndex((item) => item.id === todo.id);

        // splice kullanımı
        cloneTodos.splice(index, 1, updatedTodo);

        // güncel versiyonu state aktar
        setPosts(cloneTodos);
      });
  };

  // düzenle butonuna tıklanınca
  const handleChange = (todo) => {
    setEditItem(todo);
    setShowEditModal(true);
  };

  const handleChangeConfirm = () => {
    // apiyi güncelle
    axios.put(`/todos/${editItem.id}`, editItem).then(() => {
      const clone = [...todos];
      const index = clone.findIndex((item) => item.id === editItem.id);
      clone.splice(index, 1, editItem);
      setPosts(clone);
    });

    // penceereyi kapat
    setShowEditModal(false);
  };

  return (
    <div className="container my-5">
      <h2>Postlar</h2>
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          onChange={(e) => setTodoText(e.target.value)}
          ref={inputRef}
          type="text"
          className="form-control"
        />
        <button className="btn btn-primary">Gönder</button>
      </form>
      <ul className="list-group mt-4">
        {todos.map((todo) => (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              <input
                onClick={() => handleEdit(todo)}
                checked={todo.isDone}
                type="checkbox"
              />
              {todo.isDone ? 'Tamamlandı' : 'Devam Ediyor'}
            </span>
            <span>{todo.title}</span>
            <div className="btn-group">
              <button onClick={() => handleChange(todo)} className="btn btn-info">
                Düzenle
              </button>
              <button onClick={() => handleDelete(todo.id)} className="btn btn-warning">
                Sil
              </button>
            </div>
          </li>
        ))}
      </ul>
      {showEditModal && (
        <EditModal
          setShowEditModal={setShowEditModal}
          editItem={editItem}
          setEditItem={setEditItem}
          handleChangeConfirm={handleChangeConfirm}
        />
      )}
    </div>
  );
}

export default App;

/*
? İlk Oturum:
    // fetc kullanımı:
    fetch('https://jsonplaceholder.typicode.com/posts')
      // veriyi işleme kısmı
      .then((res) => res.json())
      .then((data) => setPosts(data));

    // axios kullanımı
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => console.log(res));
*/
