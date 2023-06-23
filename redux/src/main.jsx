import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
/*
 ! Provider:
 * store da tutulan verilerin uygulama tarafında erişilmesini sağlar
*/
import { Provider } from 'react-redux';
// store çağrılır
import store from './redux/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
