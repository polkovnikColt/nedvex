import {StyleSheet} from 'react-native';

export const buildingImageStyles = StyleSheet.create({
  image: {
    width: 110,
    zIndex: -100,
    height: 110,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  badges: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'flex-end',
    top: 0,
    right: -7,
  },
});
