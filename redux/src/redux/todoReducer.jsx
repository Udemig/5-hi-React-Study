/*
    ! reducer:
    * store'un nasıl değişeceğine karar
    * reducer bir fonksiyondur 
    * ve iki tane parametre alır bunlar:
    ? a - state: reducerda tutulan verilerin son durumu
    ? b - action: store'nasıl etkilenmesi gerektiğini söyleyen type ve payload değerlerine sahip obje 
    * reducer oluşturma adımları:

    1- initiState > başlangıç State'i yazılır
    * state'in uyguluma başladığı ilk anda sahip olucağı değerler tanımlanır
    * bu başlangıç değerine initial state denir
    * initialState değeri state'e aktarılır >  state = initialState
    2- action'u paramatre olarak alıyoruz
    * action type değeri analiz edilir
    * action'ın type değerine göre store'un nasıl etkilenmesi gerektiğini tanımlıyoruz
    3- reducer store'a tanıtmak için export edilir
*/

const initialState = {
  todos: [],
  sayi: 0,
};

// Reducer içerisnden ne return edilirse store'un son değeri olur
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // ekleme aksiyonu dispatch edildiği anda çalışır
    case 'ADD_TODO':
      console.log('EKLEME ÇALIŞTI', action);
      return {
        ...state,
        todos: [...state.todos, action.payload],
        sayi: state.sayi + 1,
      };

    /*
     * silme eylemi gerçekleşirse
     * store bundan nasıl etkilenecek karar veriyoruz
     */
    case 'DELETE_TODO':
      // eylem ile gelen silincek id'ye eşit olmayanları alıyoruz
      const filtredTodos = state.todos.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        // store' filtrelenmiş diziyi tanıtıyouz
        todos: filtredTodos,
        sayi: state.sayi - 1,
      };

    // güncelleme eylemi gerçekleşince
    // store'un  nasıl etkilenecek karar veriyoruz
    case 'UPDATE_TODO':
      console.log(action.payload);
      // dizinin bir kopyasını alma
      const cloneTodos = state.todos;
      // düzenlenecek elmanın dizideki sırasını bulma
      const i = cloneTodos.findIndex(
        (item) => item.id === action.payload.id
      );
      // elemanın dizideki sıranı gidip yeni bir değer atadık
      cloneTodos[i] = action.payload;

      return {
        ...state,
        todos: cloneTodos,
      };

    // case'lerden aksionlardan hiçibiri çalışmaz o zaman state'i olduğu gibi bırak
    default:
      return state;
  }
};

export default todoReducer;
