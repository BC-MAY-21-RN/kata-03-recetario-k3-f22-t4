import React from 'react';
<<<<<<< HEAD
import {View, Text, StyleSheet} from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { SectionHome } from '../components/SectionHome';

export const HomeScreen = () => {
  return (
    <View style={styles.pageView}>
      <SearchBar/>
      <SectionHome sectionName="TRENDING"/>
=======
import {View, StyleSheet} from 'react-native';
import {SearchBar} from '../components/SearchBar';

export const HomeScreen = () => {
  return (
    <View style={styles.containerHome}>
      <SearchBar />
>>>>>>> 52d9dc2527aef5ab02cea172209d7894bf852a11
    </View>
  );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
  pageView: {
    flex: 1,
    backgroundColor: '#433F42'
  }
=======
  containerHome: {
    flex: 1,
    backgroundColor: '#4B4A4B',
  },
>>>>>>> 52d9dc2527aef5ab02cea172209d7894bf852a11
});
