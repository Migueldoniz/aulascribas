import React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import Mybutton from './Mybutton';

export default Telainicial = (props) => {
    const chamar = () => {
        console.warn("Teste")
        props.funcao(false)
    }
    return(
        <View style={styles.container}>
                <View style={styles.divtitle}>
                <Text style={styles.title}>Jogo</Text>
                <Text style={styles.title}>da</Text>
                <Text style={styles.title}>Memória</Text>
                </View>
                <Button
                title="Fácil"
                onPress={ () => {console.warn("Teste")
                props.funcao(false)}}
                />
                <Mybutton
                label="Médio"
                
                />
                <Mybutton
                label="Hardcore 😈"
                dif="hardcore"
                teste={ chamar}
                />
                
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6B7690',
      alignItems: 'center',
      justifyContent: 'center',
    },
    divtitle: {
      marginTop: Dimensions.get('window').height/20,
      marginBottom: Dimensions.get('window').height/10,
      alignItems: 'center'
    },
    title:{
      fontSize:27,
      color: "white",
      fontWeight: '900'
    }
  });