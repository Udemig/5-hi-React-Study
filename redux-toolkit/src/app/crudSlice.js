import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    {
      id: 1,
      title: 'Navbar Düzenlensin',
      author: 'Mehmet',
      assigned_to: 'Ali',
      end_date: '2023-07-25',
    },
    {
      id: 2,
      title: 'Footer Anmasyonu',
      author: 'Ahmet',
      assigned_to: 'Veli',
      end_date: '2023-06-11',
    },
  ],
};

const crudSlice = createSlice({
  name: 'crudSlice',
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log(action.payload);
      /*
       ! gönderilen task'ın id değeri var mı onu kontrol edicez
       ? çünkü ekleme yapıldıysa id değeri gelmiycek
       ? düzenleme yapıldıysa id değeri değeri gelicek
      */

      //! Objenin id değeri varsa çalışır (günceller)
      if (action.payload.id) {
        // düzenlenecek task'ın sırasını bulma
        const index = state.tasks.findIndex(
          (i) => i.id === action.payload.id
        );

        // task'ı düzenleme
        state.tasks[index] = action.payload;
        return;
      }

      //! Objenin id değeri yoksa çalışır (diziye ekler)
      // göreve id ekleme
      action.payload.id = new Date().getTime();

      // tasks dizisine yeni görevi ekleme
      state.tasks.push(action.payload);
    },

    removeTask: (state, action) => {
      //  silinecek elemanın dizideki sırasını bulma
      const index = state.tasks.findIndex(
        (i) => i.id === action.payload
      );

      // diziden sırasını bildiğimiz elemanı çıkarma
      state.tasks.splice(index, 1);

      //   işlemin gerçekleşme hızı
      console.log(window.performance.now());
    },
  },
});

export const { addTask, removeTask } = crudSlice.actions;

export default crudSlice.reducer;
