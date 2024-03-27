import React from "react"
import { View, StyleSheet, Text } from "react-native"


export default props => {
    return(
        <View style = {style.container}>
            <Text
            style={style.Num}>
                {props.num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        backgroundColor: 'black',
        margin: 5,
        borderRadius:25,
    },
    Num: {
        color: 'white',
        fontSize: 35, 
        textAlign: "center"
    }
})