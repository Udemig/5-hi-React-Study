import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const ProductsPage = () => {
  const [books, setBooks] = useState(null);

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
          <Card key={book.id} data={book} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
