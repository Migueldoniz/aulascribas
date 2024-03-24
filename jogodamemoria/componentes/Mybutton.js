import React from "react";
import { Text, TouchableHighlight, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

export default props => {
    if (props.dif == "hardcore"){
        return(
            <TouchableOpacity onPress={() => {props.funcao()}} activeOpacity={0.7}>
                <Text style={style.botaohard}>
                    {props.label}
                </Text>
            </TouchableOpacity>
        )
    }
    else{
        return(
            <TouchableOpacity onPress={() => {props.funcao()}} activeOpacity={0.7}>
                <Text style={style.botao}>
                    {props.label}
                </Text>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    botao: {
        marginTop:10,
        fontSize: 16,
        height: Dimensions.get('window').width/8,
        width: Dimensions.get('window').width/3.2,
        padding: 2,
        backgroundColor: '#CCCBCF',
        textAlign: 'center',
        borderRadius: 10,
        color:"#6B7482",
        flex:0,
        paddingTop: 11,
        fontWeight: '900'
    },
    botaohard: {
        marginTop:10,
        fontSize: 16,
        height: Dimensions.get('window').width/8,
        width: Dimensions.get('window').width/3.2,
        padding: 2,
        backgroundColor: 'black',
        textAlign: 'center',
        borderRadius: 10,
        color:"#8593A8",
        paddingTop: 11,
        fontWeight: '900'
    }
})