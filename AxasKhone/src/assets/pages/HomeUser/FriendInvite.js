import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Contacts from 'react-native-contacts';
import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';
import feedActions from '../../../actions/userFeed';

class FriendInvite extends Component {
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

  constructor() {
    super();
    this.state = {
      contact: null
    };
  }

  componentDidMount() {
    this.FetchContacts();
    this.setState = {
      // this.state.
    };
    Reactotron.warn(this.props.contacts);
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

  renderContactItem = ({ item }) => {
    Reactotron.warn(item);
    return <ContactItem contact={item} />;
  };

  render() {
    return (
      <View>
        {this.props.contacts !== undefined ? (
          <FlatList
            data={this.props.contacts}
            renderItem={this.renderContactItem}
          />
        ) : null}
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

class ContactItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: this.props.contact.contact_name,
      userId: undefined,
      mode: undefined,
      profilePic: undefined
    };
  }

  componentWillMount() {
    let mode = undefined;
    if (this.props.contact.user === 'not_found') {
      mode = 'invite';
    } else if (this.props.contact.user instanceof Object) {
      if (this.props.contact.user.is_following === true) {
        mode = 'unfollow';
      } else {
        mode = 'follow';
      }
    }
    this.setState({ mode });
  }

  render() {
    return (
      <View>
        <View
          style={{
            height: 50,
            // backgroundColor: 'red',
            flexDirection: 'row-reverse',
            borderBottomColor: 'gray',
            borderBottomWidth: 0.5
          }}
        >
          <View
            style={{
              flex: 2,
              paddingRight: 15,
              justifyContent: 'center'
            }}
          >
            <Text style={{ textAlign: 'right', fontSize: 15, color: 'black' }}>
              {this.state.fullname}
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignContent: 'center'
            }}
          >
            <TouchableOpacity activeOpacity={0.8}>
              <View
                style={{
                  borderRadius: 5,
                  textAlign: 'center',
                  marginHorizontal: 15,
                  padding: 5,
                  backgroundColor: [
                    this.state.mode === 'follow' ? 'rgb(0,70,40)' : null,
                    this.state.mode === 'unfollow' ? 'rgb(70,70,70)' : null,
                    this.state.mode === 'invite' ? 'rgb(0,0,100)' : null,
                    this.state.mode === 'invited' ? 'rgb(70,70,70)' : null
                  ].filter(item => {
                    if (item !== null) {
                      return item;
                    }
                  })[0]
                }}
              >
                <Text
                  style={{
                    alignContent: 'center',
                    textAlign: 'center',
                    color: 'white'
                  }}
                >
                  {
                    [
                      this.state.mode === 'follow' ? 'دنبال کردن' : null,
                      this.state.mode === 'unfollow' ? 'دنبال شده است' : null,
                      this.state.mode === 'invite' ? 'دعوت کردن' : null,
                      this.state.mode === 'invited' ? 'دعوت شده است' : null
                    ].filter(item => {
                      if (item !== null) {
                        return item;
                      }
                    })[0]
                  }
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
