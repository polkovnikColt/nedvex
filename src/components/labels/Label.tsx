import React from 'react';
import {Text} from 'react-native';
import {labelStyles} from './labelsStyles';

type LabelProps = {
  isLink?: boolean;
};

export const Label: React.FC<LabelProps> = ({children, isLink}) => {
  return (
    <Text style={isLink ? labelStyles.linkLabel : labelStyles.label}>
      {children}
    </Text>
  );
};
