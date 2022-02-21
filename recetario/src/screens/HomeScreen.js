import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { SectionHome } from '../components/SectionHome';

export const HomeScreen = () => {
  return (
    <View style={styles.pageView}>
      <SearchBar/>
      <SectionHome sectionName="TRENDING"/>
    </View>
  );
};

const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: '#433F42'
  }
});
