# Redux Toolkit

Faydaları:

- Redux'a göre daha az kod içeriyor
- Dahili olarak thunk yanında geliyor
- Devtools eklentisi sayesinde proje geliştiriken store'u / reducer / aksiyon'ları izleyebiliyoruz
- Vei yönetimi daha kolay olacak

# Kurulum

Kütüphaneler:

- - @reduxjs/toolkit
- - react-redux

Kurulum Adımları:

- slice oluştur
- - slice: hem reducerları hem aksiyonları kapsar

* Slice Kurulum:
* 1- createSlice methodunu import et
* 2- gerekli parametreleri tanımla
* > > name : slice ismi
* > > initialState: başlangıç state'ı
* > > reducers{} : aksiyonları ve store'a yapıcakları ekiyi tanımlıyacaz

- store.js oluştur
- - `createStore` yerine `configureStore`
- - `configureStore` içersinde thunk tanımlı olrak gelir
- - ekstra kütüohane indirmeden thunk kullanabilriz
- - reducerları kendi içerisinde otomatik birleştirir

- reducerları store'a tanıt
- store'u exprot et
- store'u projeye main.js'de tanıt (provider)
