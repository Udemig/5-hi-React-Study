/*
    * store oluşturma:
    1. redux kütüphanesinden createStore ve combineReducers import edilir
    2. store içerisinde tutlacak veriler kategorize edilir ve herbiri için reducer oluşturulur.
    3. oluşturulan reducerlar  combineReducers() yardımıyla birleştirili
    4. createStore methodu çağrılır ve argüman olrak rootReducer verilir
    5. export store export edilir
*/
import todoReducer from './todoReducer';
import categoryReducer from './categoryReducer';

import { createStore, combineReducers } from 'redux';

// reducerlar bir bütün haline getirilir
const rootReducer = combineReducers({
  todoReducer,
  categoryReducer,
});

// store'u oluşturulur
const store = createStore(rootReducer);

// store'u proje tanıtmak için export ediyoruz
export default store;
