import React from 'react';
import {View, ScrollView, FlatList, ListRenderItem} from 'react-native';
import {Annotation} from '../components/annotations/Annotation';
import {BuildingBlock} from '../components/building/BuildingBlock';
import {annotationData, buildings} from './additional/service';
import {MapAndFilterButtons} from '../components/buttons/MapAndFilterButtons';
import {mainScreenStyles} from './mainScreenStyles';
import {BuildingInterface} from '../types/types';

export const MainScreen = () => {
  const renderItem: any = (item: BuildingInterface) => (
    <BuildingBlock
      photo={item.photo}
      badges={item.badges}
      title={item.title}
      address={item.address}
      price={item.price}
      statuses={item.statuses}
    />
  );

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
      <FlatList data={buildings} renderItem={renderItem} />
      <MapAndFilterButtons />
    </View>
  );
};
