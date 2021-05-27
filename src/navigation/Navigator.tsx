import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen} from '../screen/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import {iconsStyles} from './navigationStyles';
import Home from '../assets/navigation-icons/home.svg';
import News from '../assets/navigation-icons/newspaper.svg';
import Folder from '../assets/navigation-icons/folder.svg';
import Heart from '../assets/navigation-icons/heart.svg';
import Profile from '../assets/navigation-icons/user.svg';

const Tab = createBottomTabNavigator();

const customTabBarStyle = {
  activeTintColor: '#085186',
  inactiveTintColor: 'gray',
  style: {backgroundColor: 'whitesmoke'},
};

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={customTabBarStyle}>
        <Tab.Screen
          name="ЖК"
          component={MainScreen}
          options={{
            tabBarIcon: () => <Home style={iconsStyles.icon} />,
          }}
        />
        <Tab.Screen
          name="Новости"
          component={MainScreen}
          options={{
            tabBarIcon: () => <News style={iconsStyles.icon} />,
          }}
        />
        <Tab.Screen
          name="Подборки"
          component={MainScreen}
          options={{
            tabBarIcon: () => <Folder style={iconsStyles.icon} />,
          }}
        />
        <Tab.Screen
          name="Избранное"
          component={MainScreen}
          options={{
            tabBarIcon: () => <Heart style={iconsStyles.icon} />,
          }}
        />
        <Tab.Screen
          name="Профиль"
          component={MainScreen}
          options={{
            tabBarIcon: () => <Profile style={iconsStyles.icon} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
