import React, {useEffect, useState} from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Dimensions } from 'react-native';
import Mybutton from './Mybutton';
import Play2 from "./Play2";
//define a razão a ser multiplicado o numero definido
var primos = [7,11,13,17,19,23,29,31,37]

export default Play = (props) => {
    console.warn(props.dif)
    const [seq, setseq] = useState(3);    
    const [gameOver, setGameOver] = useState(false);
    const [mostranum, setmostranum] = useState(true)
    const [entrada, setEntrada] = useState(' ')
    const confere = async (num) => {
        console.warn(entrada)
        console.warn(num)
        if(num===entrada){
            setseq(seq+1)
            return(
                Alert.alert(
                    'Voce acertou!'
                )

            )
        }
        else{
            setGameOver(true)
            dif.alteraestado(0)
            return(
                Alert.alert(
                    'Voce errou!'
                )
                
            )
        }
    }
        if (props.dif==1){
            while (!gameOver){
                return (
                    <>
                        <View style={styles.container}>
                            <Play2
                            qtdNumeros={seq}
                            func={setEntrada}
                            ></Play2>
                            <Text style={styles.digiteaseq}>Digite a sequência</Text>
                            <TextInput style={styles.textinput}
                            onChangeText={setEntrada}
                            keyboardType="numeric"
                            placeholder=" "/>
                            <Button
                            title="OK"
                            onPress={confere}
                            >
                            
                            </Button>
                        </View>
                        
                    </>
                        )
                        
                    }
                
        }
        else if (props.dif==2){
            let partida = 0 
            let numero = Math.floor(Math.random() * primos.length);
            console.warn("to dentro do facil")
                gerarnum(1)
                console.warn(seq)

        }
        else if (props.dif==3){
            for (let i=0;i<primos.size;i++){
                gerarnum(primos[i],100)
            }
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