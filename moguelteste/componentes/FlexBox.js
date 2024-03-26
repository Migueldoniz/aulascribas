import React from "react";
import {StyleSheet, Text, View} from 'react-native'
import Quadrado from "./Quadrado";
export default props => {
    return(
        <View style={StyleSheet.FlexV1}>
            <Quadrado cor='red'></Quadrado>
            <Quadrado cor='gray'></Quadrado>
            <Quadrado cor='green'></Quadrado>
            <Quadrado cor='cyan'></Quadrado>
            <Quadrado cor='green'></Quadrado>
        </View>
    )
}

const styles = StyleSheet.create({
    FlexV1: {
        flex:1,
        justifyContent:'flex-end',
        backgroundColor: '#000'
    }
})