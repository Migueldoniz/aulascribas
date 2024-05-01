import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {Componente,Componente2} from './componentes/componente';
import {Titulo, Mensagem, somar} from './componentes/componentes'
import ListaProdutos from './ListaProdutos'
import produtos from './produtos';
import produtos2 from './produtos2';
import MyButton from './componentes/MyButton';
import Contador from './componentes/Contador';
import Alerta from './componentes/Alerta';
import Pai from './componentes/Pai';
import CompProp from './componentes/CompProp';
import Card from './componentes/Card';
import Familia from './componentes/Familia';
import Membros from './componentes/Membros';
import UsuarioLogado from './componentes/UsuarioLogado';
import FlexBox from './componentes/FlexBox';
import Mega from './componentes/Mega';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './componentes/MyStack'
import Tab from './componentes/Tab';
import Drawer from './componentes/Drawer';
import RestaurantScreen from './componentesfirebase/RestaurantScreen'
export default function App() {
  const [mostrarmsg, setmostrarmsg] = React.useState(false);
  return (
    <>
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        {/* <Tab></Tab> */}
        <Drawer></Drawer>
        <RestaurantScreen></RestaurantScreen>
      </NavigationContainer>
    </SafeAreaView>
    {/* <View style={styles.container}> */}
      {/* <Text style={styles.texto}>Bem vindo a aula de topicos</Text>
      <StatusBar style="auto" />
      <Componente></Componente>
      <Mensagem conteudo="Esse eh o conteudo"></Mensagem>
      <Text>{somar(151818,2)}</Text>
      <Text>{'\n'}</Text> {/* <View style={styles.container}>
          onPress={() => {
              setmostrarmsg(!mostrarmsg)
          }
        }/>
        {mostrarmsg && <ListaProdutos lista={produtos}/>}
        <Pai></Pai>
        <SafeAreaView style={styles.container}>
            <CompProp>
              <Text>oi</Text>
            </CompProp>
        </SafeAreaView>
        <Card>
          <Familia>
            <Membros nome="moguel" sobrenome="da silva"></Membros>
          </Familia>
        </Card>
        <SafeAreaView>
          <UsuarioLogado usuario={{nome:'Lucas', email:'lucas@unesp.br'}}></UsuarioLogado>
          <UsuarioLogado usuario={{nome:'Lucas'}}></UsuarioLogado>
          <UsuarioLogado usuario={{}}></UsuarioLogado>
          <Mega></Mega>

        </SafeAreaView>
        <FlexBox></FlexBox> */}
        {/* <Mega></Mega>
    </View> */}
    </>
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
