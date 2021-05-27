import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './annotation.styles';

type BottomAnnotationProps = {
  type: 'discount' | 'passed' | 'justice';
  text: string;
  index: number;
};

export const BottomAnnotation: React.FC<BottomAnnotationProps> = ({
  text,
  type,
  index,
}) => {
  return (
    <View
      style={
        index === 0
          ? {...styles.containerAtFirstPosition, ...styles[type]}
          : {...styles.container, ...styles[type]}
      }>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
