import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

// benzer özellik ile alaklı olan testleri
// bir araya toplamamız sağlar
describe('Sayaç özellikleri', () => {
  test('başlangıç değeri 0 olmalı', () => {
    render(<Counter />);

    // test ediceiğimi elemanı çağırma
    const count = screen.getByTestId('sayi');

    // yazı içeriğini kontrol etme
    expect(count).toHaveTextContent('0');
  });

  test('Arrtır butonuna tıklanınca değer 1 artmalı', () => {
    render(<Counter />);

    // test elementlerini çağırma
    const count = screen.getByTestId('sayi');

    // + butonu çağırma
    const btn = screen.getByRole('button', { name: 'Arttır' });

    //  butona tıklama
    fireEvent.click(btn);

    // sayinin 1 artmış olmasını kontrol
    expect(count).toHaveTextContent('1');

    // 2 kere daha tıklama
    fireEvent.click(btn);
    fireEvent.click(btn);

    // sayinin 1 artmış olmasını kontrol
    expect(count).toHaveTextContent('3');
  });
});

//! Haftaya kadar azaltma özelliği tesi yapın
//! Ekstra:
// Sayaç 0 'ın altına düşmesini engelleyin
// Bunun testini yapın
