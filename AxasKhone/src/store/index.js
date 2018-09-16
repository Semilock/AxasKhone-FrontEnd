import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';
import createEncryptor from 'redux-persist-transform-encrypt';
// import Reactotron from '../../ReactotronConfig';
import rootReducer from '../reducers';

const encryptor = createEncryptor({
  secretKey: '}8sJSSeSp=)*4/7kE,-3p,AVmoSe.Z>t'
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
//Reactotron.
export const store = createStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
