import { useEffect } from 'react';
import AddForm from './components/AddForm';
import ListTodos from './components/ListTodos';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // api'den todo verilierini çekme
    axios.get('http://localhost:3060/todos').then((res) =>
      // verileri reducer'a gönderme
      dispatch({
        type: 'SET_TODOS',
        payload: res.data,
      })
    );
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-5">
      <h1>Redux</h1>
      <AddForm />
      <ListTodos />
    </div>
  );
}

export default App;
