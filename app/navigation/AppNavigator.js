import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { theme } from '../constants';
import { CoursesScreen, HomeScreen, ProjectScreen } from '../screens';

const Tab = createBottomTabNavigator();

const { getFont, size } = theme;

const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ size, color }) => {
    let iconName;
    let Icon = FontAwesome5;
    if (route.name === 'Home') iconName = 'home';
    if (route.name === 'Courses') iconName = 'jedi';
    if (route.name === 'Project') {
      Icon = FontAwesome;
      iconName = 'folder';
    }
    return <Icon name={iconName} color={color} size={size} />;
  },
});

const AppNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    {...{ screenOptions }}
    tabBarOptions={{
      labelStyle: {
        fontFamily: getFont(2),
        fontSize: size.s1,
      },
      safeAreaInsets: {
        bottom: 4,
      },
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Courses" component={CoursesScreen} />
    <Tab.Screen name="Project" component={ProjectScreen} />
  </Tab.Navigator>
);

export default AppNavigator;