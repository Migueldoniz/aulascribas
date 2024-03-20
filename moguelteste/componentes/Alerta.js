import React from "react";
import { View, Button, Alert } from "react-native";

export default Alerta = () => {
    const showAlert = () => {
        Alert.alert(
            'Título do alerta',
            'Exemplo',
            [
                {text: 'OK', onPress: () => console.warn('Ok pressiondo')},
                {text: 'Cancelar', onPress: () => console.warn('Cancelar pressiondo')},
            ]
        )
    }
    return (
        <View style= {{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Button title="Mostrar alerta" onPress={showAlert}/>
        </View>
    )
}