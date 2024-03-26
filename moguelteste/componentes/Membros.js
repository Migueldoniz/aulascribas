import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
export default Membros =(props)=> {
    return(
        <View>
            <Text>
                {props.nome} {props.sobrenome}
            </Text>

        </View>
    )
}