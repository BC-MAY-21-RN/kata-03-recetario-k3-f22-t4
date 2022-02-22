import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SearchBar} from '../components/SearchBar';
import { SectionHome } from '../components/SectionHome';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.containerHome}>
      <SearchBar />
      <SectionHome 
      section="TRENDING"
      navigation={navigation}
      />
      <SectionHome 
      section="RECENT"
      navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#4B4A4B',
  },
});
