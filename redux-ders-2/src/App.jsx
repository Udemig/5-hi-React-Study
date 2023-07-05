import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import ListUsers from './components/ListUsers';
import actionTypes from './redux/constants/actionTypes';
import {
  getUsers2,
  setLoading,
  setUsers,
} from './redux/actions/userActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // store'daki loading değerini güncelleme
    dispatch(setLoading(true));

    // API'den verileri çekme (async askiyon yardımıyla)
    dispatch(getUsers2());
  }, []);

  return (
    <>
      <h1>Redux / API</h1>
      <ListUsers />
    </>
  );
}

export default App;
