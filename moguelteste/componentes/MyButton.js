import React from "react";
import { Text, TouchableHighlight, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

export default props => {
    return(
        <TouchableOpacity onPress={props.onClick} activeOpacity={0.7}>
            <Text style={style.botao}>
                {props.label}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    botao: {
        marginTop:10,
        fontSize: 20,
        height: Dimensions.get('window').width/8,
        width: Dimensions.get('window').width/4,
        padding: 10,
        backgroundColor: 'cyan',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: 5,
    }
})