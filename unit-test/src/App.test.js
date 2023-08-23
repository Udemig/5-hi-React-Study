import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Button from './components/Button';
import SendForm from './components/SendForm';

//! test methodu iki parametre alır
//1. testin string açıklaması (testten ne beklediğimizi yazarız)
//2. gerekli testleri yapıcağımız fonksiyon
test('unit test başlığı ekrana basılır', () => {
  // testi yapıcağımı bileşeni ekrana basma (sanal ortamda)
  render(<App />);

  // test etmek istedğimiz elementi çağırma
  const headingEle = screen.getByText('Unit Test');

  // çağırlan elementi test etme
  expect(headingEle).toBeInTheDocument();
});

//* buton ilk başta:
//* kırmızı olucak ve içiersinde "Maviye Çevir" yazıcak
//* üzerine tıklanıldıktan sonra
//* mavi olucak ve içiersinde "Kırmızıya Çevir" yazıcak
test('buton doğru renge yazıya sahip', () => {
  render(<Button />);

  // test ediceğimiz elementi seçme
  const colorBtn = screen.getByRole('button', {
    name: 'Maviye Çevir',
  });

  // butonun rengi kırmızı mı?
  expect(colorBtn).toHaveStyle({ background: 'red' });

  // butona tıklanır
  fireEvent.click(colorBtn);

  // yeni rengi kontrol eder
  expect(colorBtn).toHaveStyle({ background: 'blue' });

  // yeni yazı doğru mu?
  expect(colorBtn).toHaveTextContent('Kırmızıya Çevir');
});

// chekbox tiklenmeden önce buton inaktif
// sonra aktif olmasını kontrol etme
test('chexkboxa göre buton aktifliği', () => {
  render(<SendForm />);

  // test edilecek butonu çağırma
  const button = screen.getByRole('button');

  // butonun inaktif olmasını kontrol etme
  expect(button).toBeDisabled();

  // checkbox'ı çağırma
  const checkbox = screen.getByRole('checkbox');

  // chebox'a tıklama
  fireEvent.click(checkbox);

  // butonun aktif olduğunu kontrol etme
  expect(button).toBeEnabled();
});
