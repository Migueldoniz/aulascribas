import React, {useEffect} from "react";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Dimensions } from 'react-native';
import Mybutton from './Mybutton';
var primos = [2,3,5,7,11,13,17,19,23,29,31,37]

export default Play = ({dif}) => {
    console.warn(dif)
    const [seq, setseq] = React.useState([]);    
    const [gameOver, setGameOver] = React.useState(false);

    const gerarnum = (size,limit) => {
        let numeros=[]
        for (let i=0;i<size;i++){
          numeros.push(Math.floor(Math.random()*limit))
        }
        setseq(numeros)
    }

    useEffect(() => {
        if (!gameOver) {
        if (dif==="facil"){
            console.warn("to dentro do facil")

            for (let i=0;i<primos.length;i++){
                gerarnum(5,primos[i])
                console.warn(seq)
            }
        }
        else if (dif==="medio"){
            for (let i=0;i<primos.size;i++){
                gerarnum(primos[i],10)
            }
        }
        else if (dif==="hardcore"){
            for (let i=0;i<primos.size;i++){
                gerarnum(primos[i],100)
            }
        }
    }
    }, [dif, gameOver]);
    const handleInputChange = (text) => {
        setUserInput(text);
        if (text.length === 5) {
            // Aqui você pode verificar a entrada do usuário
            // e decidir se o jogo acabou ou se uma nova sequência deve ser gerada
            // Por exemplo, comparar a entrada do usuário com seq
            setGameOver(true); // Neste exemplo, definimos como verdadeiro para encerrar o jogo após uma entrada
        }
    }

        return (
            <View style={styles.container}>
                    {seq.map((n, index) => (
                    <Text style={styles.number} key={index}>{n} </Text>
                    ))}
                <Text style={styles.digiteaseq}>Digite a sequência</Text>
                <TextInput style={styles.textinput}
                placeholder=" "/>
            </View>
           )
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
        fontSize: 5,
        color: 'white'
    }
    
})