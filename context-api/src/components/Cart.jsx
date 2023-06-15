import { useContext } from 'react';
import { SepetContext } from '../context/SepetContext';

const Cart = ({ id, name, image, price }) => {
  // sepetContext'e abone olma
  const dönenVeri = useContext(SepetContext);

  return (
    <div className="card">
      <img src={image} />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h4>{name}</h4>
          <p>{price}</p>
        </div>

        <button
          className="btn btn-outline-dark"
          //  contextte bulunan addToCart methodunu çalıştırıp
          //  fonksiyona sepete eklenecek ürünün objesini gönderiyoruz
          onClick={() =>
            dönenVeri.addToCart({
              id,
              name,
              image,
              price,
              amount: 1, // sepete eklendiği anda miktarı 1 olacağı için ekledik
            })
          }
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Cart;
