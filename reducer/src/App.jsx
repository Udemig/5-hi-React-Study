import { useState } from 'react';
import './App.css';
import TodoState from './components/TodoState';

import TodoReducer from './components/TodoReducer';

function App() {
  return (
    <>
      <TodoReducer />
    </>
  );
}

export default App;
