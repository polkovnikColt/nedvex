import React from 'react';
import {View} from 'react-native';
import {Navigator} from './src/navigation/Navigator';
import {Navbar} from './src/components/navbar/Navbar';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Navbar />
      <Navigator />
    </View>
  );
};

export default App;
