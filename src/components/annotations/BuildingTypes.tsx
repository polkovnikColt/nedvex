import React from 'react';
import {View, Text} from 'react-native';
import {buildingTypesStyles} from './annotation.styles';

type BottomAnnotationProps = {
  type: 'discount' | 'passed' | 'justice';
  text: string;
  index: number;
};

export const BuildingTypes: React.FC<BottomAnnotationProps> = ({
  text,
  type,
  index,
}) => {
  return (
    <View
      style={
        index === 0
          ? {
              ...buildingTypesStyles.containerAtFirstPosition,
              ...buildingTypesStyles[type],
            }
          : {...buildingTypesStyles.container, ...buildingTypesStyles[type]}
      }>
      <Text style={buildingTypesStyles.text}>{text}</Text>
    </View>
  );
};
