import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

export const IngredientsSection = ({food}) => {
    const ingredients = food.ingredients.ingredientsAll
    const renderItem = ({item}) => (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.amount}</Text>
        </View>
    )

    return (
        <View>
            <Text>Ingredients</Text>
            <Text>{food.ingredients.serving}</Text>
            <FlatList
                data={ingredients}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    containerIngredients: {
        flex: 1,
        marginTop: 80,
        marginHorizontal: 20
    },

    ingredientsText: {
        fontSize: 20,
        color: 'white'
    },

    servings: {
        fontSize: 17,
        color: 'white'
    },

    containerIngredientsAll: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
    
})
