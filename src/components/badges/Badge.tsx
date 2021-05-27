import React from 'react';
import {View, Text} from 'react-native';
import {badgesStyles} from './badgesStyles';

type BadgeProps = {
  counter: number;
};

export const Badge: React.FC<BadgeProps> = ({counter}) => {
  return (
    <View style={badgesStyles.badge}>
      <Text style={badgesStyles.text}>{counter}</Text>
    </View>
  );
};
