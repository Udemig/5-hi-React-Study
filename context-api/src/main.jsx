import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { SepetProvider } from './context/SepetContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*
     * Providerı yani sağlayıcıyı
     * bütün uygulamayı sarıcak şekilde konumlandırıyoruz
     * bu sayade uygulamnaın içerisindeki bütün bileşenler
     * sağlayı tarafından sunulan verilere erişebilecek
     *
     */}
    <SepetProvider>
      <App />
    </SepetProvider>
  </React.StrictMode>
);
