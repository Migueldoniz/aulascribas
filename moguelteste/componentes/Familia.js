import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import Membros from "./Membros";
export default Familia =(props)=>{
    return(
        <View>
            <Text> Membros </Text>
            {props.children}
        </View>
    )
}