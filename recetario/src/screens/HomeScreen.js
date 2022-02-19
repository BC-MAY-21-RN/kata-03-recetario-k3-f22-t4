import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SearchBar} from '../components/SearchBar';

export const HomeScreen = () => {
  return (
    <View style={styles.containerHome}>
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#4B4A4B',
  },
});
