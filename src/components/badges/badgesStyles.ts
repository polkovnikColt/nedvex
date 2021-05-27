import {StyleSheet} from 'react-native';

export const badgesStyles = StyleSheet.create({
  badge: {
    borderRadius: 100,
    backgroundColor: '#fff',
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fe523a',
  },
});

export const annotationBadgesStyles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    width: 30,
    height: 30,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerAtLastPosition: {
    marginLeft: 2,
    width: 30,
    height: 30,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
  news: {
    backgroundColor: '#2eb692',
  },
  discount: {
    backgroundColor: '#ed4f4d',
  },
  favorite: {
    backgroundColor: '#fea002',
  },
});
