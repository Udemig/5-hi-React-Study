import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const [detail, setDetail] = useState();
  // useParams > URL'den parametreleri almamızı sağlar
  const { productId } = useParams();
  // useNavigate kurlumu
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3060/books/${productId}`)
      .then((res) => setDetail(res.data))
      .catch((err) =>
        navigate(`/undefined/${err?.response?.status}`)
      ); // 404 sayfasına yönlendir
  }, []);

  if (!detail) return 'Loading..';

  return (
    <div
      style={{ height: '84vh' }}
      className="row justify-content-center align-items-center"
    >
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img
          className="rounded shadow"
          src={detail.image}
        />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
        <h1>{detail.title}</h1>
        <p>Yazar {detail.author}</p>
        <p>{detail.description}</p>
        <p>Sayfa Sayısı: {detail.page}</p>
        <p>Yıl: {detail.year}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
