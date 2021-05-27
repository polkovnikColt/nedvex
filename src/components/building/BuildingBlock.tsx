import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {formatPrice} from './adittional/service';
import {Label} from '../labels/Label';
import {BadgeInterface, StatusInterface} from '../../types/types';
import {BuildingTypes} from '../annotations/BuildingTypes';
import {BuildingImage} from '../images/BuildingImage';
import {styles} from './buildingStyles';

type BuildingBlockProps = {
  title: string;
  address: string;
  price: number;
  photo: string;
  badges: BadgeInterface[];
  statuses: StatusInterface[];
};

export const BuildingBlock: React.FC<BuildingBlockProps> = ({
  title,
  address,
  price,
  photo,
  badges,
  statuses,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoBlock}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={{...styles.address, ...styles.text}} numberOfLines={1}>
          {address}
        </Text>
        <Text style={styles.price}>От {formatPrice(price)}</Text>
        <Text style={styles.text}>
          <Label isLink>6 квартир</Label> под ваш запрос
        </Text>
        <View style={styles.flexRow}>
          {statuses.map((status, index) => (
            <BuildingTypes
              index={index}
              type={status.type}
              text={status.label}
            />
          ))}
        </View>
      </View>
      <View style={styles.imageBlock}>
        <BuildingImage source={photo} badges={badges} />
      </View>
    </View>
  );
};
