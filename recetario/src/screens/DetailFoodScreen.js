import React from 'react';
import {View, Text} from 'react-native';
import { MainDetail } from '../components/MainDetail';
import { IngredientsSection } from '../components/IngredientsSections';

export const DetailFoodScreen = ({route}) => {
  const {food} = route.params
  return (
    <View>
      <MainDetail food={food}/>

      <IngredientsSection food={food}/>
    </View>
  );
};
