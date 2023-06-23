import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const AddForm = () => {
  // dispatch methodunu kurmak
  const dispatch = useDispatch();

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

    /*
      ! oluşturduğumuz objeyi store'a aktarma
      * store da  değişiklik yapmanın tek yolu
      * bir eylemi (action)'ı dispatch yöntemiyle reducere sevk etmek
    */
    dispatch({
      type: 'ADD_TODO',
      payload: newTodo,
    });
  };

  return (
    <form
      className="d-flex  align-items-center justify-content-center"
      onSubmit={handleSubmit}
    >
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button>Ekle</button>
    </form>
  );
};

export default AddForm;
