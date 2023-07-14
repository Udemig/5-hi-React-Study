/*
! hem reducer'ları
! hem action'ları
* farklı dosyalarda oluşturmak yerine 
* slice dosyasında oluşturucaz

? Slice Kurulum:
* 1- createSlice methodunu import et 
* 2- gerekli parametreleri tanımla
* > > name : slice ismi
* > > initialState: başlangıç state'ı
* > > reducers{} : aksiyonları ve store'a yapıcakları ekiyi tanımlıyacaz
*/

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increase: (state) => {
      state.count += 1;
    },
    decrease: (state) => {
      state.count -= 1;
    },
    // payload değererini kullanıcağımız zaman
    // action'ı parametre olarak alıyoruz
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

// 2. Aşama : counterSlice içerisindeki action'ları export etme
export const { increase, decrease, setCount } = counterSlice.actions;

// 3.Aşama createSlice'ın oluşturduğu reducer'ı export etme
export default counterSlice.reducer;
