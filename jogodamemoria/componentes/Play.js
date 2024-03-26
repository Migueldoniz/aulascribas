import React, {useEffect, useState} from "react";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Dimensions } from 'react-native';
import Mybutton from './Mybutton';
//define a razão a ser multiplicado o numero definido
var primos = [2,3,5,7,11,13,17,19,23,29,31,37]

export default Play = ({dif}) => {
    console.warn(dif)
    const [seq, setseq] = useState([]);    
    const [gameOver, setGameOver] = useState(true);
    const [mostranum, setmostranum] = useState(true)
    let numeros=['']
    
    const gerarnum = (size,limit) => {
        console.warn(size)
        for (let i=0;i<size;i++){
        numeros.push(Math.floor(Math.random()*limit))
        }
        setTimeout(() => {
            setmostranum(false);
            numeros.pop()
        }, 2000);
    }

        if (dif==1){
            let partida = 0 
            let numero = Math.floor(Math.random() * primos.length);
            console.warn("to dentro do facil")
                gerarnum(1,numero)
                console.warn(seq)
                
        }
        else if (dif==2){
            for (let i=0;i<primos.size;i++){
                gerarnum(primos[i],10)
            }

        }
        else if (dif==3){
            for (let i=0;i<primos.size;i++){
                gerarnum(primos[i],100)
            }
        }
        while (gameOver){
            return (
                <>
                    <View style={styles.container}>
                        {mostranum &&  <Text>{numeros}</Text>}
                        <Text style={styles.digiteaseq}>Digite a sequência</Text>
                        <TextInput style={styles.textinput}
                        value={String.text}
                        placeholder=" "/>
                    </View>
                    
                </>
                    )
                    
                }
    }

    
   


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6B7690',
        color: 'black',
        flex:1,
        justifyContent: 'flex-end',
        alignItems:'center',
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
        fontSize: 10,
        color: 'white',
        flex:1,

    }
    
})