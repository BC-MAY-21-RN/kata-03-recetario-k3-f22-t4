import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailFoodScreen} from '../screens/DetailFoodScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailFood" component={DetailFoodScreen} />
    </Stack.Navigator>
  );
};
