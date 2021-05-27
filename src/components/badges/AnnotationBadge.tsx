import React from 'react';
import {View} from 'react-native';
import {icons} from '../annotations/additional/service';
import {annotationBadgesStyles} from './badgesStyles';

type AnnotationBadgeProps = {
  type: 'news' | 'discount' | 'favorite';
  isLast: boolean;
};

export const AnnotationBadge: React.FC<AnnotationBadgeProps> = ({
  type,
  isLast,
}) => {
  return (
    <View
      style={
        isLast
          ? {
              ...annotationBadgesStyles.containerAtLastPosition,
              ...annotationBadgesStyles[type],
            }
          : {
              ...annotationBadgesStyles.container,
              ...annotationBadgesStyles[type],
            }
      }>
      {React.createElement(icons[type], annotationBadgesStyles.icon)}
    </View>
  );
};
