import { StatusBar } from 'expo-status-bar';
import React, { cloneElement } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import Mybutton from './componentes/Mybutton';
import Telainicial from './componentes/Telainicial'

export default function App() {
  const [mostrartelainicial, setmostrartelainicial] = React.useState(true);
  const alteraestado = (estado) => {
    setmostrartelainicial(estado)
    console.warn(mostrartelainicial)
  }
  return (

    <>
    {mostrartelainicial && <Telainicial funcao={alteraestado}/>}
      
    </>
  );
}

