import { StatusBar } from 'expo-status-bar';
import React, { cloneElement } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import Mybutton from './componentes/Mybutton';
import Telainicial from './componentes/Telainicial'
import Play from './componentes/Play';

export default function App() {
  const [mostrarTela, setmostrarTela] = React.useState(true);
  const [dif, setdif] = React.useState('');

  const alteraestado = (dif) => {
    setmostrarTela(false)
    setdif(dif)
  }
   
  return (
    <>
    {
      mostrarTela ? <Telainicial alteraestado={alteraestado}></Telainicial> : <Play dif={dif}></Play>
    }
      
    </>
  );
}

const styles = new StyleSheet.create({
  textinput: {
      backgroundColor: '#000',
      color: 'black'
  },
  container: {
    flex: 1,
    backgroundColor: '#6B7690',
    alignItems: 'center',
    justifyContent: 'center',
  },
})