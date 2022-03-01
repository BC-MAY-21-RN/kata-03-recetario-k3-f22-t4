import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const SearchBar = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.containerSearch}>
      <View style={styles.containerTexto}>
        <Icon name="search-outline" color="white" size={25} />
        <TextInput
          style={styles.search}
          value={search}
          placeholder="What do you want to eat?"
          placeholderTextColor={'white'}
          onChangeText={setSearch}
        />
      </View>
      <Icon name="mic-outline" color="white" size={25} />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    color: 'white',
    padding: 4,

  },
  containerSearch: {
    backgroundColor: 'grey',
    height: 40,
    margin: 20,
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerTexto:{
    flexDirection: 'row',
  }
});
