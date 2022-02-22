import React from "react";
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


export const MainDetail = ({food, navigation }) => {

    return (
        <View style={styles.containerMain}>
            <ImageBackground source={food.img} style={styles.imageBackground} imageStyle={{opacity: 0.5}}>
                <View style={styles.containerIcons}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack() }>
                            <Icon name="close-outline" color="white" size={50}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.right}>
                        <Icon name="download-outline" color="white" size={50}/>
                        <Icon name="heart-outline" color="white" size={50}/>
                    </View>
                </View>
                <View style={styles.containerAbout}>
                    <Text style={styles.section}>
                        {food.section}
                    </Text>
                    <Text style={styles.nameFood}>
                        {food.name}
                    </Text>
                </View>
            </ImageBackground>
        </View>  
    )
}

const styles = StyleSheet.create({
    
    containerMain: {
        flex: 1,
        backgroundColor: '#4B4A4B'
    },

    imageBackground:{
        height: 430,
        justifyContent: 'space-between',
    },

    containerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },

    right: {
        flexDirection: 'row',
    },

    containerAbout: {
        margin: 20,
        color: 'white'
    },

    section: {
        fontSize: 20,
        color: 'white'
    },

    nameFood: {
        fontSize: 30,
        color: "white"
    }
})
