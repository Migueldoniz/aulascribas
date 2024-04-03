import React from 'react';
import { Button, Text, View } from 'react-native'
import TextoCentral from './TextoCentral';
import { StyleSheet } from 'react-native';
import PassoStack from './PassoStack';

export default props => {

    return(
        <View>
            <TextoCentral corFundo = 'blue'>
                Tela A
            </TextoCentral>
            <Button
                title="Ir para Tela B"
                onPress={() => props.navigation.navigate('TelaB')}
            />
        </View>

    )
}

const style = StyleSheet.create({
    texto: {
        fontSize: 50,
    },
    tela: {
        flex: 1, //significa que pode oculpar a tela inteira
        justifyContent: "center", //eixo principal (vertical) conteudo é centralizado
        alignItems: 'center',
    }
})