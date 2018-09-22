import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './src/store';
import Start from './Start';

console.disableYellowBox = true;
export default class App extends Component {
  loading = () => {
    <ActivityIndicator size="large" />;
  };
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={this.loading()} persistor={persistor}>
          <Start />
        </PersistGate>
      </Provider>
    );
  }
}
