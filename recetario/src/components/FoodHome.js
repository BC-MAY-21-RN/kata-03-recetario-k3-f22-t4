import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";


export const FoodHome = ({type, name, img}) => {

    return (
        <View style={styles.containerFood}>
            <Image style={type === 'TRENDING' ? styles.imagesTrending : styles.imagesRecent } source={img}/>
            <Text style={styles.foodName}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerFood : {
        padding: 10,
    },
    imagesTrending : {
        height: 100,
        width: 100,
    },
    imagesRecent : {
        height: 155,
        width: 155,
    },
    foodName : {
        color: 'white',
    }


})