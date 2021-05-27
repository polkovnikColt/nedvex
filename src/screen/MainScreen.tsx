import React from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import {Annotation} from '../components/annotations/Annotation';
import {BuildingBlock} from '../components/building/BuildingBlock';
import {annotationData, buildings} from './additional/service';
import {AbsoluteButton} from '../components/buttons/AbsoluteButton';
import {mainScreenStyles} from './styles';

export const MainScreen = () => {
  return (
    <View style={mainScreenStyles.screen}>
      <ScrollView style={mainScreenStyles.annotationList} horizontal>
        {annotationData.map(annotation => (
          <Annotation
            label={annotation.label}
            color={annotation.color}
            Icon={annotation.Icon}
          />
        ))}
      </ScrollView>
      <FlatList
        data={buildings}
        renderItem={({item}) => (
          <BuildingBlock
            photo={item.photo}
            badges={item.badges}
            title={item.title}
            address={item.address}
            price={item.price}
            statuses={item.statuses}
          />
        )}
      />
      <AbsoluteButton />
    </View>
  );
};
