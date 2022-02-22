import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { MainDetail } from '../components/MainDetail';
import { IngredientsSection } from '../components/IngredientsSections';

export const DetailFoodScreen = ({route, navigation }) => {
  const {food} = route.params

  return (
    <View style={styles.FoodScreen}>
      <MainDetail food={food} navigation={navigation}/>
      
      <IngredientsSection food={food}/>
    </View>
  );
};

const styles = StyleSheet.create ({
  FoodScreen: {
    backgroundColor: '#4B4A4B',
    flex: 1
  }
})