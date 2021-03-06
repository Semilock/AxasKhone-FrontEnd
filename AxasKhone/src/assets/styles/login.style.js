import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20
    // backgroundColor: 'rgb(92, 92, 92)'
  },

  item: {
    flex: 3,
    // backgroundColor: 'red',
    // alignItems: 'center', ino age bzari dg text baxa arzeshun kamtrin halat mishe
    justifyContent: 'flex-end'
    //  backgroundColor: 'rgba(0,0,0,0.5)',
  },

  linearGradient: {
    flex: 1
  },

  title: {
    fontSize: 20,
    marginTop: 5,
    color: 'rgb(240, 240, 240)'
    //  fontFamily: 'IranNastaliq',
  },

  inputText: {
    //   height: '30%',
    color: 'black',
    paddingHorizontal: 10,
    marginTop: 5,
    marginHorizontal: 15,
    backgroundColor: 'rgb(240, 240, 240)',
    borderRadius: 5,
    textAlign: 'right',
    padding: 10
  },

  loginButton: {
    //  height: '20%',
    backgroundColor: 'rgb(182, 182, 182)',
    color: 'white',
    fontSize: 20,
    borderRadius: 10,
    marginTop: 5,
    textAlign: 'center',
    marginHorizontal: 15,
    padding: 10
  },

  forgetPass: {
    marginTop: 10,
    color: 'white',
    textAlign: 'center'
  },

  borderError: {
    borderColor: 'orange',
    borderWidth: 2,
    color: 'brown'
  },

  textError: {
    marginHorizontal: 20,
    textAlign: 'right',
    color: 'orange',
    fontSize: 16
  }
}));
