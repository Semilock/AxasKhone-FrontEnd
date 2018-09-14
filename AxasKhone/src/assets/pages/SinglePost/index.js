import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SingelPost from './SingelPost';

export default class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: undefined
    };
  }
  componentWillMount() {
    const post = this.props.navigation.getParam('post');
    this.setState({
      post
    });
  }

  render() {
    return <SingelPost post={this.state.post} />;
  }
}
