import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Text, ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './src/store';
import Start from './Start';
// import './ReactotronConfig';
// import ReactotronConfig from './ReactotronConfig';

console.disableYellowBox = true;
export default class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     s: true
  //   }
  // }
  // componentDidMount(){
  //   setInterval(() =>{
  //     this.setState({s:!this.state.s});
  //   },2000)
  // }

  loading = () => {
    <ActivityIndicator size="large" />;
  };
  render() {
    // return (<Bazi>{this.state.s ? <Text>How Are You?</Text> : <Text>Hello</Text>}</Bazi>);
    return (
      <Provider store={store}>
        <PersistGate loading={this.loading()} persistor={persistor}>
          <Start />
        </PersistGate>
      </Provider>
    );
  }
}
