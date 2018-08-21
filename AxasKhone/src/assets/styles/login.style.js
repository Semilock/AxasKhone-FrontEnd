import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    
    container: {
      flex: 1,
    },

    item: {
        flex: 3,
        // backgroundColor: 'red',
        // alignItems: 'center', ino age bzari dg text baxa arzeshun kamtrin halat mishe
        justifyContent: 'flex-end',
      //  backgroundColor: 'rgba(0,0,0,0.5)',
      },

    linearGradient: {
      flex: 1,
    },

    title: {
      fontSize: 20,
      marginTop: 5,
      color: 'rgb(239, 239, 239)',
      fontFamily: 'IranNastaliq',
    },

    inputText: {
     //   height: '30%',
        color: 'black',
        paddingHorizontal: 10,
        marginTop: 5,
        marginHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 5,
        textAlign: "right",
        padding: 10,
    },

    loginButton: { 
    //  height: '20%',      
      backgroundColor: 'rgb(182, 182, 182)',
      color: "white",
      fontSize: 20,
      borderRadius: 10,
      marginTop: 5,
      textAlign: 'center',
      marginHorizontal: 15,
      padding: 10,
    },

    forgetPass: {
      marginTop: 10,
      color: "white",
      textAlign: 'center',
    },

  });