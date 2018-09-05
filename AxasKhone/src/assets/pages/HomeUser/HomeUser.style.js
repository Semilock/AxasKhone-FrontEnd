import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
  container: {
    flex: 1
  },

  navBarContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgb(25, 50, 75)',
    height: 60,
    paddingHorizontal: 20,
    alignItems: 'center'
  }
}));
