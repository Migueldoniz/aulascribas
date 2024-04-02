import React from 'react';
import { Button, Text } from 'react-native'
import TextoCentral from './TextoCentral';
import { StyleSheet } from 'react-native';
import PassoStack from './PassoStack';
import TelaA from './TelaA';
export default props => {
    return (
        <>
            <Button
            title='inicio'
            onPress={() => props.navigation.navigate('TelaA')}
            ></Button>
            <TextoCentral corFundo='red'>
                Tela C
            </TextoCentral>
        </>
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