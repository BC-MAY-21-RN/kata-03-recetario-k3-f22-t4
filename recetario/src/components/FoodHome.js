import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";


export const FoodHome = ({type, name, img}) => {

    return (
        <View style={type === 'TRENDING' ? styles.containerFoodT : styles.containerFoodR}>
            <Image style={type === 'TRENDING' ? styles.imagesTrending : styles.imagesRecent } source={img}/>
            <Text style={styles.foodName}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerFoodT : {
        padding: 10,
        width:120
    },
    containerFoodR : {
        padding: 10,
    },
    imagesTrending : {
        height: 100,
        width: 100,
        borderRadius: 5,
    },
    imagesRecent : {
        height: 155,
        width: 155,
        borderRadius: 5,
    },
    foodName : {
        marginTop: 7,
        color: 'white',
        fontSize: 15,
        textAlign: 'justify'
    }


})