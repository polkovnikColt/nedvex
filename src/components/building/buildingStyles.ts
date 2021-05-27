import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 200,
    borderBottomColor: 'grey',
    padding: 15,
    margin: 5,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 17,
    color: 'grey',
  },
  infoBlock: {
    width: '70%',
  },
  imageBlock: {
    width: '30%',
  },
  address: {
    padding: 3,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 3,
  },
  price: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  flexRow: {
    flexDirection: 'row',
  },
});
