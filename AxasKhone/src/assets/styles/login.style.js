import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // tooli mindaze vasat
    //  justifyContent: 'center',
      // arzi mindaze vasat
      alignItems: 'center',
      backgroundColor: 'rgb(92, 92, 92)'
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 20,
      color: 'rgb(240, 240, 240)',
      paddingTop: 10
    },
    inputText: {
        height: 50,
        width: 320,
        color: 'black',
        padding: 5,
        margin: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'white',
        textAlign: "right",
        borderRadius: 5,
    },

    loginButton: {
        height: 50,
        width: 320,
        backgroundColor: 'rgb(182, 182, 182)',
        color: "white",
        fontSize: 20,
        borderRadius: 10,
        marginTop: 5,
        textAlign: 'center',
        padding: 10,
    },

    forgetPass: {
        marginTop: 10,
        color: "white",
    },
    
    logo: {
        height: 70,
        width: 70,
        backgroundColor: 'black',
        marginTop: 70,
      //  color: "white",
        borderRadius: 35
    }


  });

  export default styles;