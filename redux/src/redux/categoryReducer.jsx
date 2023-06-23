const initialState = {
  category: [],
  sayi: 0,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    // ekleme aksiyonu dispatch edildiği anda çalışır
    case 'ADD_CATEGORY':
      console.log('EKLEME ÇALIŞTI');
    case 'DELETE_CATEGORY':
      console.log('SİLME ÇALIŞTI');
    // case'lerden aksionlardan hiçibiri çalışmaz o zaman state'i olduğu gibi bırak
    default:
      return state;
  }
};

export default categoryReducer;
