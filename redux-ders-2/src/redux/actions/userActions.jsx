import axios from 'axios';
import actionTypes from '../constants/actionTypes';

//! aksiyonları tanımladığımız dosya
//  akisoyonlar'ı ayrı bir dosyada tutarak
//  kod tekrarını önleriz ve dah az kod yazar
//  bileşenlerde daha temiz bir yapı oluştururuz

// Normal (senkron) aksiyonlar
export const setLoading = (param) => ({
  type: actionTypes.SET_LOADING,
  payload: param,
});

export const setUsers = (payload) => ({
  type: actionTypes.SET_USERS,
  payload,
});

/* 
! ASENKRON AKSİYON
* dispatch işleminden önce
* async işlemler yapmamızı sağlar
* oluşturmak için redux-thunk kütüphanesi kullanılabilir
? oluşturma Yolu:
* function içerisinde return edilen async fonksiyon yazılır 
* return edilen fonksiyon dispatch parametresi alır
* önce async işlemler yapılır
* dispatch edilip veristore'a gönderilir
*/

export const getUsers2 = () => {
  return async function (dispatch) {
    // asenkron işlemler yapılır
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    // api'den gelen cevap reducer'a gönderilir
    dispatch({
      type: actionTypes.SET_USERS,
      payload: res.data,
    });
  };
};

// THUNK ile async action Yazım Stili
// Uzun Yol
function deneme() {
  return async function (dispatch) {
    // işlemler yapılır
  };
}

// Kısa Yol
const deneme2 = () => async (dispatch) => {
  // işlemler
};
