import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {annotationStyles} from './annotation.styles';
import {SvgProps} from 'react-native-svg';

type AnnotationProps = {
  label: string;
  color: string;
  Icon: React.FC<SvgProps>;
};

export const Annotation: React.FC<AnnotationProps> = ({label, color, Icon}) => {
  return (
    <View style={{...annotationStyles.block, backgroundColor: color}}>
      <TouchableOpacity style={annotationStyles.iconButton}>
        <Icon style={annotationStyles.image} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={annotationStyles.label}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};
