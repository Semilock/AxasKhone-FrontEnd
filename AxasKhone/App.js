import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Text } from 'react-native';
import store from './src/helpers/store';
import Start from './Start';
import './ReactotronConfig';
import ReactotronConfig from './ReactotronConfig';
import Reactotron from 'reactotron-react-native';

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

  render() {
    // return (<Bazi>{this.state.s ? <Text>How Are You?</Text> : <Text>Hello</Text>}</Bazi>);
    return (
      <Provider store={store}>
        <Start />
      </Provider>
    );
  }
}
