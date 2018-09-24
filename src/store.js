import {
  createStore,
  applyMiddleware,
  combineReducers,
  
} from 'redux';

import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: hardSet,
  
}

const rootReducer = combineReducers({
  auth: authReducer
})

const pReducer = persistReducer(rootPersistConfig, rootReducer);

const middleware = [thunk];

export const store = createStore(
  pReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);

export const persistor = persistStore(store);