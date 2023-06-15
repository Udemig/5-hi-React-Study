import { useContext } from 'react';
import { SepetContext } from '../context/SepetContext';

const Checkout = () => {
  // context yapısna abone olma
  const { items, deleteFromCart, addToCart } =
    useContext(SepetContext);

  /* sizi içerisnde tutlan bütün ürünlerin fiyatlarını
   * miktar değerlerini göre toplama
   * reduce methodu iki parametre alır
   * aldığı ikinci parametre dizideki döndüpü elemanlardır
   * bu elemanın herhangi bir değerini aldığı birinci parametreye ekler
   * ! işlemin sonucununda , koyup totalin ilk değerini vermemiz gerek
   */

  const total = items.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );
  return (
    <div className="d-grid gap-5 p-4">
      <h2>
        Ürünlerin Toplam Fiyatı
        <span className="text-success p-1">{total}</span>
        tl'dir
      </h2>
      {/* contexte tutulan items dizisndeki herbir eleman  iitemsçin ekrana kart basma*/}
      {items.map((item) => (
        <div className="d-flex border shadow p-4 justify-content-between align-items-center h-50">
          <img className="h-100 rounded" src={item.image} />
          <h1>{item.name}</h1>
          <h1 className="text-success">
            {item.price * item.amount} tl
          </h1>
          <p className="fw-bold">Miktar: {item.amount}</p>
          <button onClick={() => addToCart(item)}>
            Ekle
          </button>
          <button
            onClick={() => deleteFromCart(item)}
            className="button bg-danger"
          >
            {item.amount > 1 ? 'Azalt' : 'Kaldır'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
