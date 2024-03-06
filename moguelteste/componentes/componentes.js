import React from "react";
import { Text, View } from "react-native";

export const Titulo = ({ texto }) => (
    <View>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            {texto}
        </Text>
    </View>
);

export const Mensagem = ({ conteudo }) => (
    <View>
        <Text style={{fontSize: 24, fontWeigh: 18}}>{conteudo}</Text>
    </View>
);

export const somar = (x,y) => x+y;
