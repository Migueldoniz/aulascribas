import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {Componente,Componente2} from './componentes/componente';
import {Titulo, Mensagem, somar} from './componentes/componentes'
import ListaProdutos from './ListaProdutos'
import produtos from './produtos';
import produtos2 from './produtos2';
import MyButton from './componentes/MyButton';
import Contador from './componentes/Contador';

export default function App() {
  const [mostrarmsg, setmostrarmsg] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem vindo a aula de topicos</Text>
      <StatusBar style="auto" />
      <Componente></Componente>
      <Componente2></Componente2>
      <Componente3></Componente3>
      <Titulo texto="Esse eh o titulo"></Titulo>
      <Mensagem conteudo="Esse eh o conteudo"></Mensagem>
      <Text>{somar(151818,2)}</Text>
      <Text>{'\n'}</Text>
      <Button
          title='clica'
          onPress={() => {
              setmostrarmsg(!mostrarmsg)
          }
        }/>
        {mostrarmsg && <ListaProdutos lista={produtos}/>}
        <MyButton 
        label = "Ok"
        onClick= {() => {console.warn("Testando")}}/>
        <Contador passo="2"></Contador>
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
    height:30,
  },
  container1: {
    flex: 1,
    backgroundColor: '#AABBCC',
    alignItems: 'center',
    justifyContent: 'center',
    height:70,
  },

  texto: {
    color: "#FFF"
  }
});
