import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SearchBar} from '../components/SearchBar';
import { SectionHome } from '../components/SectionHome';

export const HomeScreen = () => {
  return (
    <View style={styles.containerHome}>
      <SearchBar />
      <SectionHome section="TRENDING"/>
      <SectionHome section="RECENT"/>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#4B4A4B',
  },
});
