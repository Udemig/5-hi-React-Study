import { useReducer } from 'react';

/*
 ? > iki tane parametre alır
  > > state : bileşen içerisinde tuttuğumuz veriler
  > > action : veriyi değiştirmeye yarayan eylem
  > > action bir objedir ve type değerine sahiptir
  > > ve bazı durumlarda yanında veri getirmesi gerekir(payload)
 ! > Görevi: eylemleri analiz edip state' i günceller 
 ? > reducerdan return edilen son şey state in değeridir
*/
function reducer(state, action) {
  // todoTexti güncelleme
  if (action.type === 'SET_TODO')
    return { ...state, todoText: action.payload };
  // todos dizisine yeni eleman ekleme
  if (action.type === 'ADD_TODO')
    return {
      ...state,
      todos: [...state.todos, action.payload],
    };
}

const TodoReducer = () => {
  /*
    !useReducer: react hooklarından biri
    > state yönetiminin useState ile beraber 
    > zor olduğu durumlarda devreye girer
    ?> bizden iki parametre ister:
     > > reducer : fonksiyon
     > > initialState : başlangıç değeri
    ?> bize iki veri döndürür:
    > > state : tutlan veri
    > > dispatch : action'ları çalıştıracak fonkisyon
  */
  const [state, dispatch] = useReducer(reducer, {
    todoText: '',
    todos: [],
  });

  // input değiştiğinde
  const handleChange = (e) => {
    dispatch({
      type: 'SET_TODO',
      payload: e.target.value,
    });
  };

  // göndere tıklandığında
  const handleSubmit = (e) => {
    e.preventDefault();
    // STATEİ GÜNCELLEMNİN TEK YOLU DİSPATCH İLE ACTİON ÇALIŞTIRMAK
    dispatch({
      type: 'ADD_TODO',
      payload: state.todoText,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" />
        <button>Gönder</button>
      </form>
      <ul>
        {state.todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoReducer;
