import {StyleSheet} from 'react-native';

export const navbarStyles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#085186',
    height: 100,
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 27,
    padding: 20,
    marginTop: 15,
  },
  image: {
    width: 20,
    height: 20,
    padding: 20,
    marginHorizontal: 15,
    marginTop: 35,
  },
});
