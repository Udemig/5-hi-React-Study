import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const deneme = [
    {
      id: 1,
      name: 'Furkan',
    },
    {
      id: 2,
      name: 'Bilal',
    },
    {
      id: 3,
    },
  ];
  return (
    <div
      style={{ minHeight: '85vh' }}
      className="d-flex flex-column align-items-center justify-content-center p-4 gap-5"
    >
      <h1>Hoşgeldiniz</h1>
      <h1>{process.env.REACT_}</h1>
      <img
        className="img-fluid"
        src="https://www.pngall.com/wp-content/uploads/4/Welcome-PNG-Download-Image.png"
        alt=""
      />
      <p className="lead text-center">
        <span onClick={() => navigate('/ürünler')}>
          Ürünler Sayfasında
        </span>
        yeni çıkan her şeyi görüntüleyebilirsiniz
      </p>
      {deneme.map((insan) => (
        <p>{insan?.name}</p>
      ))}
    </div>
  );
};

export default MainPage;
