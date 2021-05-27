import {StyleSheet} from 'react-native';

export const annotationStyles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    width: 170,
    height: 50,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 4,
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: '10%',
    textAlign: 'center',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 20,
    height: 20,
  },
});

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  containerAtFirstPosition: {
    marginRight: 8,
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
  },
  discount: {
    backgroundColor: '#fb5443',
  },
  passed: {
    backgroundColor: '#18b600',
  },
  justice: {
    backgroundColor: '#ebebeb',
  },
});
