import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export default configureStore({
  reducer: { counterReducer },
});

// configure store parametre olrak
// bizden 1 options objesi ister
// obje içerisinde reducer değeri olarak reducer'ı tanımları
// 1den fazla reducer olduğu durumda reducer'ları obje içerisine alrır
