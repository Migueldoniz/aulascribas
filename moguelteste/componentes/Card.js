import React from "react";
import Familia from "./Familia";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default Card = (props) =>{
    return(
        <View style={styles.card}>
            {props.children}
        </View>
    )
    
}

const styles = StyleSheet.create({
    card:{
        borderWidth:1,
        borderColor: 'white',
        padding: 10,
        margin: 10
    }
})