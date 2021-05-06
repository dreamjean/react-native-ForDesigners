import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';

import { NotificationsScreen, SectionScreen, SettingsScreen } from '../screens';
import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={({ route, navigation }) => ({
      headerShown: false,
      cardOverlayEnabled: true,
      headerStatusBarHeight:
        navigation.dangerouslyGetState().routes.findIndex((r) => r.key === route.key) > 0
          ? 0
          : undefined,
    })}
  >
    <Stack.Screen name="Main" component={MainNavigator} />
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{ ...TransitionPresets.ModalPresentationIOS }}
    />
    <Stack.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{ ...TransitionPresets.ModalPresentationIOS }}
    />
    <Stack.Screen
      name="Section"
      component={SectionScreen}
      options={{ ...TransitionPresets.ModalSlideFromsBottomIOS }}
    />
  </Stack.Navigator>
);

export default AppNavigator;