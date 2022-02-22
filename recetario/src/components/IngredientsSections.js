import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

export const IngredientsSection = ({food}) => {
    const ingredients = food.ingredients.ingredientsALL;

    const renderItem = ({item}) => (
        <View style={styles.containerIngredientsAll}>
            <Text style={styles.ingredientText}>{item.name}</Text>
            <Text style={styles.ingredientText}>{item.amount}</Text>
        </View>
    );

    const itemSeparator = () => {
        return (
            <View
                style={{
                    borderBottomWidth: 1,
                    opacity: 0.4,
                    marginVertical: 8,
                    backgroundColor: 'white',
                    borderColor: 'white'
                }}
            />
        )
    }

    return (
        <View style={styles.containerIngredients}>
            <Text style={styles.ingredientsText}>Ingredients</Text>
            <Text style={styles.servings}>{food.ingredients.serving}</Text>
            <FlatList
                data={ingredients}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={itemSeparator}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerIngredients: {
        flex: 1,
        marginTop: 80,
        marginHorizotal: 20,
        padding: 20
    },

    ingredientsText: {
        fontSize: 20,
        color: 'white',
        marginTop: 80,
    },

    servings: {
        fontSize: 17,
        color: 'white'
    },

    containerIngredientsAll: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    ingredientText: {
        color: 'white',
    },
    
})
