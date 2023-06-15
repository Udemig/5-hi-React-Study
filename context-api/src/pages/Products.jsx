import Cart from '../components/Cart';

const Products = () => {
  // Ürünler Verisi
  const products = [
    {
      id: 1,
      name: 'Ceket',
      image: 'https://picsum.photos/200',
      price: 120,
    },
    {
      id: 2,
      name: 'Bot',
      image: 'https://picsum.photos/201',
      price: 90,
    },
    {
      id: 3,
      name: 'T-Shirt',
      image: 'https://picsum.photos/203',
      price: 210,
    },
    {
      id: 4,
      name: 'Kaban',
      image: 'https://picsum.photos/204',
      price: 369,
    },
    {
      id: 5,
      name: 'Pantalon',
      image: 'https://picsum.photos/205',
      price: 150,
    },
    {
      id: 6,
      name: 'Terlik',
      image: 'https://picsum.photos/201',
      price: 90,
    },
    {
      id: 7,
      name: 'Kazak',
      image: 'https://picsum.photos/203',
      price: 350,
    },
    {
      id: 8,
      name: 'Çanta',
      image: 'https://picsum.photos/204',
      price: 329,
    },
  ];

  return (
    <div className="container d-flex flex-wrap justify-content-between gap-5 p-4">
      {/* products dizisindeki herbir obje için ekrana kart basma */}
      {products.map((product) => (
        //  ekrana bastığımız karta kartın
        // içericiği ürünün bilgilerini prop olrak gönderdik

        <Cart {...product} />
      ))}
    </div>
  );
};

export default Products;
