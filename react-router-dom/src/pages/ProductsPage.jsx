import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const [books, setBooks] = useState(null);
  console.log(window.location);
  useEffect(() => {
    axios
      .get('http://localhost:3060/books')
      .then((res) => setBooks(res.data))
      .catch((err) => {}); //hata sayfasına yönlendir
  }, []);

  console.log(books);

  //   eğer apiden cevap gelmediyse loading ekranı
  if (books === null) return 'Loading...';

  return (
    <div>
      <h3 className="px-5 mt-3">
        {books.length} kitap bulundu
      </h3>

      <div className="cards-container">
        {/* kitaplar dizisindeki herbir eleman için ekran kart basma */}
        {books.map((book) => (
          // link etiketiyle yöndlenditereciğimiz sayfaya veri göderme
          <Link
            to={`/ürün-detay/${book.id}`}
            state={{ uzunluk: books.length }}
          >
            <Card key={book.id} data={book} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
