import React from 'react';
import { useSelector } from 'react-redux';
import SingleTodo from './SingleTodo';

const ListTodos = () => {
  // store a abone olma
  const merkeziVeri = useSelector((store) => store.todoReducer);

  return (
    <div>
      {/* eğerki tutlan veri sayısı 0 a eşitse ekran bas */}
      {merkeziVeri.sayi === 0 && <p>Lütfen yeni görev ekleyiniz..</p>}

      {/* dizideki her obje için erkan kart basma */}
      {merkeziVeri.todos.map((todo) => (
        <SingleTodo todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;
