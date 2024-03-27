import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

export default Play2 = (props) => {
    const [numero, setNumero] = useState('');
    const [executou, setExecutou] = useState(false)
    let numstring = ""

    const renderizarNumeros = async ()=> {
        let repeticoes=0
        while(props.qtdNumeros > repeticoes){
            await new Promise(resolve => setTimeout(resolve, 1000));
            repeticoes++
            let numero=Math.floor(Math.random() * 100)
            setNumero(numero);
            console.warn(repeticoes)
            numstring=numstring+numero
            console.warn(numstring)
        }
        props.func(numstring)
    }
    if(!executou){
        setExecutou(true)
        renderizarNumeros();
    }
    return (
        <>
        
            <View style={styles.container}>
                <Text>Partida: {props.qtdNumeros}</Text>
                <Text style={styles.number}>{numero}</Text>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6B7690',
        color: 'black',
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        height: Dimensions.get('window').height
    },
    textinput: {
        marginBottom: Dimensions.get('window').height/3,
        fontSize:20,
        backgroundColor: '#D9D9D9',
        borderRadius: 7,
        width: Dimensions.get('window').width/1.5,
        height: Dimensions.get('window').height/15,
        paddingRight: 20,
        paddingLeft: 20
    },
    digiteaseq: {
        color: 'white',
        fontWeight: '900',
        marginBottom: 7,
        fontSize: 17
    },
    number: {
        alignItems:'center',
        fontSize: 100,
        color: 'white',
        flex:1,

    }
    
})