import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import AuthStack from './src/assets/pages/Auth';
import ProfileScreen from './src/components/ProfileScreen';

class Start extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Spinner
          visible={this.props.isFetching}
          textContent="در حال بارگذاری"
          textStyle={{ color: '#FFF' }}
        />
        {this.props.isAuthenticated === true ? (
          <ProfileScreen />
        ) : (
          <AuthStack />
        )}
      </View>
    );
  }
}
function mapStateToProps(state) {
  const { isAuthenticated, isFetching } = state.auth;

  return {
    isAuthenticated,
    isFetching
  };
}

export default connect(
  mapStateToProps,
  undefined
)(Start);
