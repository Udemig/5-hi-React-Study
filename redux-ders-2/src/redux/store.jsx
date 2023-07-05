import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer } from './reducers/userReducer';
import thunk from 'redux-thunk';

// projede birden fazla reducer olma durumunu
// ele almak için reducer'ları birleştiriyoruz
const rootReducer = combineReducers({
  userReducer,
});

// store'u oluşturup export etme
export default createStore(rootReducer, applyMiddleware(thunk));
