import { createContext, useState } from 'react';
/*
 * Context API:
 * Uygulamaızdaki bir çok bileşenin ihtiyacı olan verileri
 * Ve bu verileri değiştirmeye yarayacak fonksiyonları tutan
 * ve yalnızca kendeisine abone olan bileşenlere bu verileri gönderen
 * merkezi state yönetim aracı
 */

//  Context yapısının temelini oluşturma
export const SepetContext = createContext();

// sağlayıcıyı ve onun tuttuğu verileri tanımlama
export function SepetProvider({ children }) {
  const [items, setItems] = useState([]);

  // sepete yeni eleman ekleme fonksiyonu
  const addToCart = (product) => {
    // sepete klenmey çalışan eleman sepet dizisinde bulunuyor mu ?
    const foundItem = items.find(
      (item) => item.id === product.id
    );

    if (foundItem) {
      // eleman bulundysa miktar değerini artır
      product.amount++;
      // clone alma
      const clone = [...items];
      // düzenlediğimiz elmanın dizideki yerini bulma
      const index = clone.findIndex(
        (i) => i.id === product.id
      );
      // bu elemanın dizide güncelle
      clone[index] = product;
      // state'i güncelle
      setItems(clone);
    } else {
      // eleman bulunnmadıysa sepete ekle
      setItems([...items, product]);
    }
  };

  // sepetten eleman eksiltme
  const deleteFromCart = (product) => {
    // elemanı dizide bulma
    const foundItem = items.find(
      (item) => item.id === product.id
    );

    if (foundItem.amount > 1) {
      // miktarı 1 den fazlaysa miktarını azaltırız
      const cloneItems = [...items];
      // bize gelen ürünün miktarını azaltma
      product.amount--;
      //  değiştiriceğim elemanın dizideki sırasını bulma
      const index = cloneItems.findIndex(
        (i) => i.id === product.id
      );
      // dizideki eski elemanı çıkartıp yenisini ekleme
      cloneItems[index] = product;
      // state'i güncelle
      setItems(cloneItems);
    } else {
      // miktar 1 ise elemanı diziden çıkartık
      const filtredArr = items.filter(
        (item) => item.id !== product.id
      );
      // state'i güncelleme
      setItems(filtredArr);
    }
  };

  return (
    <SepetContext.Provider
      value={{ items, addToCart, deleteFromCart }}
    >
      {children}
    </SepetContext.Provider>
  );
}
