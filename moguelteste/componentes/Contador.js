import { Button, TextInput } from "react-native"
import { Text } from "react-native"
import { useState } from "react"

export default props => {

    const [numero, setNumero] = useState(parseInt(props.inicial))
    const [numero1, setNumero1] = useState(0)

    const inc = () => {
        setNumero(numero+parseInt(props.passo))
        console.warn(numero)
    }
    const dec = () => setNumero(numero-parseInt(props.passo))

    const handleTextchange= (text) => {
        text.trim() !== !isNaN(text) ? setNumero(parseInt(text)) :setNumero(0);
    };
    
    const soma = (numero1,numero2) => {
        
    }
    return (
        <>
            <Text style = {{fontSize: 35, textAlign:'center'}}>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
            <TextInput
                style= {{color: "FFF"}}
                placeholder="Inicialize o contador"
                onChangeText={(text) => {
                    setNumero(text)
                }}
                value={''}/>

            <TextInput
                style= {{color: "FFF"}}
                placeholder="Inicialize o contador"
                onChangeText={(text) => {
                    setNumero2(text)
                }}
                value={''}/>
        </>
    )
}