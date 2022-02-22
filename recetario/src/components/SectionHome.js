import React from "react";
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { api } from "../api/food";
import { FoodHome } from "./FoodHome";

export const SectionHome = ({ section, navigation }) => {
    const typeFood = api.filter(food => food.section === section);
    const renderItem = ({ item }) => (
        <TouchableOpacity 
        onPress={() => navigation.navigate('DetailFood', {food: item})}
        >
            <FoodHome 
                type={item.section}
                name={item.name}
                img={item.img}
            />
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.sectionName}>
                {section}
            </Text>
            <FlatList 
                data={ typeFood }
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        margin: 20,
    },
    sectionName : {
        color: 'deeppink',
        fontSize: 20,
    }
})