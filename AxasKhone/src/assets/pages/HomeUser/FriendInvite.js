import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Contacts from 'react-native-contacts';
import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';
import feedActions from '../../../actions/userFeed';

class FriendInvite extends Component {
  constructor() {
    super();
    this.state = {
      contact: null
    };
  }

  static navigationOptions = {
    tabBarVisible: true,
    headerStyle: {
      backgroundColor: 'rgb(25, 50, 75)',
      elevation: 0
    },
    headerTintColor: 'white',
    headerRight: (
      <Text
        style={[
          (style = {
            alignItems: 'center',
            margin: 10,
            color: 'white',
            fontSize: 18
          })
        ]}
      >
        دعوت از دوستان
      </Text>
    )
  };

  FetchContacts = () => {
    Contacts.getAll((err, contacts) => {
      if (err) throw err;
      Reactotron.log(contacts);
      let allContac = { contact_list: [] };
      contacts.map(item => {
        if (item.emailAddresses.length > 0) {
          let contact = null;
          contact = {
            email: item.emailAddresses[0].email,
            name:
              item.familyName === null
                ? item.givenName
                : `${item.givenName} ${item.familyName}`
          };
          allContac.contact_list = [...allContac.contact_list, contact];
        }
      });
      // Reactotron.warn(allContac);
    });
  };

  render() {
    return (
      <View>
        <Text onPress={this.FetchContacts}>ffff</Text>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getContact: allContac => dispatch(feedActions.sendContact1(allContac))
  };
};

const mapStateToProps = state => {
  const { contacts } = state.contact;
  return {
    contacts
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendInvite);
