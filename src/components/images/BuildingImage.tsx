import React from 'react';
import {View, Image} from 'react-native';
import {BadgeInterface} from '../../types/types';
import {AnnotationBadge} from '../badges/AnnotationBadge';
import {buildingImageStyles} from './imagesStyles';

type BuildingImageProps = {
  source: any;
  badges: BadgeInterface[];
};

export const BuildingImage: React.FC<BuildingImageProps> = ({
  badges,
  source,
}) => {
  return (
    <View>
      <View style={buildingImageStyles.badges}>
        {badges.length > 0 &&
          badges.map((badge, index) => {
            return (
              <AnnotationBadge
                type={badge.type}
                isLast={badges.length - 1 === index}
              />
            );
          })}
      </View>
      <Image style={buildingImageStyles.image} source={source} />
    </View>
  );
};
