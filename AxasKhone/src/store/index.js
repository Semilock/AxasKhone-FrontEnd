import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';
import createEncryptor from 'redux-persist-transform-encrypt';
import rootReducer from '../reducers';
import { storageSecretKey } from '../../config';

const encryptor = createEncryptor({
  secretKey: `${storageSecretKey}`
  // onError: function(error) {
  //   // Handle the error.
  // }
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'profile'],
  transforms: [encryptor]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunkMiddleware];

export const store = createStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
