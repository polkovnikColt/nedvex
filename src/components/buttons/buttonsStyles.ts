import {StyleSheet} from 'react-native';

export const absoluteButtonStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    width: '66%',
    elevation: 15,
  },
  buttonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  colorWhite: {
    color: '#fff',
  },
  colorGrey: {
    color: 'grey',
  },
  mapIcon: {
    height: 25,
    width: 25,
  },
  button: {
    padding: 10,
    height: 50,
    elevation: 6,
    width: '50%',
    alignItems: 'center',
  },
  map: {
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filter: {
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    backgroundColor: '#fe523a',
    justifyContent: 'space-between',
  },
});
