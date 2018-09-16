import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import notificationActions from '../../../actions/userNotifications';
import NotificationItem from './NotificationItem';

class Notifications extends Component {
  constructor() {
    super();
    this.state = {
      limit: 5,
      offset: 0
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('willFocus', playload => {
      this.getNotifications(this.state.limit, this.state.offset);
    });
  }

  getNotifications = (limit, offset) => {
    this.props.getNotifications(limit, offset);
    this.setState(prevState => ({
      offset: prevState.offset + prevState.limit
    }));
  };

  renderNotification = ({ item }) => {
    return <NotificationItem notif={item} />;
  };

  render() {
    return (
      <View>
        {this.props.notifications !== undefined ? (
          <FlatList
            data={this.props.notifications}
            onEndReached={() =>
              this.getNotifications(this.state.limit, this.state.offset)
            }
            onEndReachedThreshold={0.5}
            // onRefresh={}
            refreshing={this.props.notificationIsFetching}
            renderItem={this.renderNotification}
          />
        ) : null}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNotifications: (limit, offset) =>
      dispatch(notificationActions.getNotifications(limit, offset))
  };
};

const mapStateToProps = state => {
  const { isFetching, isAuthenticated } = state.auth;
  const notificationIsFetching = state.notification.isFetching;
  const { notifications, error } = state.notification;
  // const contacts = state.contact.contacts;
  return {
    isFetching,
    isAuthenticated,
    notifications,
    error,
    notificationIsFetching
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);
