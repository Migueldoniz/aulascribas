import { StatusBar } from 'expo-status-bar';
import React, { cloneElement } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import Mybutton from './componentes/Mybutton';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.divtitle}>
          <Text style={styles.title}>Jogo</Text>
          <Text style={styles.title}>da</Text>
          <Text style={styles.title}>Memória</Text>
        </View>
        <StatusBar style="auto" />
        <Mybutton
          label="Fácil"
          onPress
        />
        <Mybutton
          label="Médio"
        />
        <Mybutton
          label="Hardcore 😈"
          dif="hardcore"
        />
        
      </View>
    </>
  );
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