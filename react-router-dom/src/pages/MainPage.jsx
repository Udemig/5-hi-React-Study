import React from 'react';

const MainPage = () => {
  return (
    <div
      style={{ minHeight: '85vh' }}
      className="d-flex flex-column align-items-center justify-content-center p-4 gap-5"
    >
      <h1>Hoşgeldiniz</h1>
      <img
        className="img-fluid"
        src="https://www.pngall.com/wp-content/uploads/4/Welcome-PNG-Download-Image.png"
        alt=""
      />
      <p className="lead text-center">
        Ürünler Sayfasında yeni çıkan her şeyi
        görüntüleyebilirsiniz
      </p>
    </div>
  );
};

export default MainPage;
