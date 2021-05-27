import React from 'react';
import {View, Text} from 'react-native';
import Search from '../../assets/annotation-icons/search-interface-symbol.svg';
import {navbarStyles} from './navbarStyles';

export const Navbar: React.FC = () => {
  return (
    <View style={navbarStyles.navbar}>
      <Text style={navbarStyles.text}>38 новостроек</Text>
      <Search style={navbarStyles.image} />
    </View>
  );
};
