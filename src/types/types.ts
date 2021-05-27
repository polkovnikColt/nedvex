import React from 'react';
import {SvgProps} from 'react-native-svg';

export interface AnnotationInterface {
  label: string;
  color: string;
  Icon: React.FC<SvgProps>;
}

export interface BuildingInterface {
  title: string;
  address: string;
  price: number;
  photo: string;
  badges: BadgeInterface[];
  statuses: StatusInterface[];
}

export interface BadgeInterface {
  type: 'news' | 'discount' | 'favorite';
}

export interface StatusInterface {
  label: string;
  type: 'discount' | 'passed' | 'justice';
}
