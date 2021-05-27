import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Badge} from '../badges/Badge';
import Map from '../../assets/annotation-icons/map.svg';
import {absoluteButtonStyles} from './buttonsStyles';

export const AbsoluteButton: React.FC = () => {
  return (
    <View style={absoluteButtonStyles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{...absoluteButtonStyles.button, ...absoluteButtonStyles.map}}>
        <Text
          style={{
            ...absoluteButtonStyles.buttonText,
            ...absoluteButtonStyles.colorGrey,
          }}>
          КАРТА
        </Text>
        <Map style={absoluteButtonStyles.mapIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          ...absoluteButtonStyles.button,
          ...absoluteButtonStyles.filter,
        }}>
        <Text
          style={{
            ...absoluteButtonStyles.buttonText,
            ...absoluteButtonStyles.colorWhite,
          }}>
          ФИЛЬТР
        </Text>
        <Badge counter={5} />
      </TouchableOpacity>
    </View>
  );
};
