import React from 'react';
import { Text } from 'react-native'
import TextoCentral from './TextoCentral';
import { StyleSheet } from 'react-native';
import PassoStack from './PassoStack';


export default props => {
    return (
        <TextoCentral corFundo='black'>
            Tela B
        </TextoCentral>
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