import {AnnotationInterface, BuildingInterface} from '../../types/types';
import News from '../../assets/annotation-icons/bolt.svg';
import Discount from '../../assets/annotation-icons/percentage.svg';
import Star from '../../assets/annotation-icons/star.svg';

export const annotationData: AnnotationInterface[] = [
  {
    label: 'НОВИНКИ',
    color: '#42bb8c',
    Icon: News,
  },
  {
    label: 'AКЦИИ',
    color: '#f14e51',
    Icon: Discount,
  },
  {
    label: 'ИЗБРАННЫЕ',
    color: '#ffa800',
    Icon: Star,
  },
];

export const buildings: BuildingInterface[] = [
  {
    title: 'ЖК Ария',
    address: 'улица Винограднаяб 123/8, Сочи',
    price: 1998000,
    photo: require('../../assets/buildings/ЖК1.jpg'),
    badges: [],
    statuses: [
      {label: 'СДАН', type: 'passed'},
      {label: 'АКЦИЯ', type: 'discount'},
      {label: 'ЮСТИЦИЯ', type: 'justice'},
    ],
  },
  {
    title: 'ЖД SunLight (ЖД Санлайт)',
    address: 'ул. Изумрудная, 38, Большой Со',
    price: 1210900,
    photo: require('../../assets/buildings/ЖК2.jpg'),
    badges: [{type: 'news'}],
    statuses: [
      {label: 'СДАН', type: 'passed'},
      {label: 'ЮСТИЦИЯ', type: 'justice'},
    ],
  },
  {
    title: 'ЖК Виолет',
    address: 'ул. Фиалок, 19, Веселое',
    price: 1927800,
    photo: require('../../assets/buildings/ЖК3.jpg'),
    badges: [],
    statuses: [
      {label: 'СДАН', type: 'passed'},
      {label: 'ЮСТИЦИЯ', type: 'justice'},
    ],
  },
];
