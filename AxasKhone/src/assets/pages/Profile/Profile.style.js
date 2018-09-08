import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
  container: {
    flex: 1
  },

  navBarContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgb(25, 50, 75)',
    height: 60,
    paddingHorizontal: 25,
    // borderWidth: 1,
    alignItems: 'center'
  },

  boxUp: {
    // flexDirection: 'row',
    flexDirection: 'row-reverse',
    height: 130,
    padding: 15,
    backgroundColor: 'rgb(239, 239, 239)'
  },

  BoxDown: {
    flex: 1
  },

  profileImage: {
    flex: 0.3,
    // backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },

  profileInfo: {
    flex: 0.7,
    marginRight: 10
    // justifyContent: 'center',
    // backgroundColor: 'red'
  },

  titleNavbar: {
    fontSize: 16,
    marginHorizontal: 10,
    flexDirection: 'row',
    color: 'white'
  },

  title: {
    fontSize: 20,
    // marginTop: 5,
    // color: 'rgb(239, 239, 239)',
    fontFamily: 'IranNastaliq',
    textAlign: 'right'
  },

  buttomSubmit: {
    backgroundColor: 'rgb(25, 50, 75)',
    color: 'rgb(182, 182, 182)',
    fontSize: 20,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
    marginHorizontal: 15,
    padding: 10
    // borderWidth: 1,
  },

  inputText: {
    //   height: '30%',
    color: 'black',
    paddingHorizontal: 10,
    marginTop: 5,
    marginHorizontal: 15,
    backgroundColor: 'white',
    //  borderWidth: 1,
    borderRadius: 5,
    textAlign: 'right',
    padding: 10
  },
  folowSection: {
    flexDirection: 'row-reverse'
    // justifyContent: 'space-around'
    // justifyContent: 'right'
  },
  holderTextInput: {
    backgroundColor: 'white',
    color: 'rgb(182, 182, 182)',
    fontSize: 20,
    borderRadius: 5,
    marginTop: 5,
    // marginBottom: 15,
    flexDirection: 'row-reverse',
    marginHorizontal: 15,
    padding: 10
  }
}));
