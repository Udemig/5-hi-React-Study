import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';

const SingleTodo = ({ todo }) => {
  // dispatch methodunu kurulumu
  const dispatch = useDispatch();

  // sil butonuna tıklanınca çalışır
  const handleDelete = () => {
    // todo'yu api den silme
    axios
      .delete(`http://localhost:3060/todos/${todo.id}`)
      .then(() => {
        // todo'yu store'dan kaldırma
        // silme işlemi gerçekleştirmek istediğimizi
        // belirten eylemi reducera sevk ettik
        dispatch({
          type: 'DELETE_TODO',
          payload: todo.id,
        });
      });
  };

  //   tamanla butonuna tıklanınca
  const handleUpdate = () => {
    // güncellenicek elemanı ve elemanın güncel halini store'da güncelleme
    // elemanı güncelleme
    const updatedTodo = { ...todo, isDone: !todo.isDone };

    // api' daki halini güncelleme
    axios
      .put(`http://localhost:3060/todos/${todo.id}`, updatedTodo)
      .then(() => {
        // güncel hali reducer'a gönderme
        dispatch({
          type: 'UPDATE_TODO',
          payload: updatedTodo,
        });
      });
  };

  return (
    <div className="card my-4">
      <div className="card-body">
        <h5>{todo.text}</h5>
        <h6>{todo.isDone ? 'Tamalandı' : 'Devam Ediyor'}</h6>
        <p>{new Date(todo.date).toLocaleDateString()}</p>
        <button onClick={handleUpdate}>
          {todo.isDone ? 'Geri Al' : 'Tamamla'}
        </button>
        <button className="mx-3" onClick={handleDelete}>
          Sil
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
