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

  componentDidMount() {
    this.FetchContacts();
  }

  FetchContacts = () => {
    Contacts.getAll((err, contacts) => {
      if (err) throw err;
      // Reactotron.log(contacts);
      let allContac = {};
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
          allContac = [...allContac, contact];
        }
      });
      // Reactotron.warn({ contact_list: allContac });
      this.props.getContact(allContac);
    });
  };

  render() {
    return (
      <View>
        <Text>
          salam
          {this.props.contacts}
        </Text>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getContact: allContac => dispatch(feedActions.sendContact(allContac))
  };
};

const mapStateToProps = state => {
  const { contacts } = state.contact;
  // const contacts = state.contact.contacts;
  return {
    contacts
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendInvite);
