import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Componente,Componente2} from './componentes/componente';
import {Titulo, Mensagem, somar} from './componentes/componentes'


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem vindo a aula de topicos</Text>
      <StatusBar style="auto" />
      <Componente></Componente>
      <Componente2></Componente2>
      <Componente3></Componente3>
      <Titulo texto="Esse eh o titulo"></Titulo>
      <Mensagem conteudo="Esse eh o conteudo"></Mensagem>
    </View>
  );
}

const Componente3 = () =>{
  return(
    <View>
    <Text>
      alo
    </Text>
  </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffaaab',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    color: "#FFF"
  }
});
