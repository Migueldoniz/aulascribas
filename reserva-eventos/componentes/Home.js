import React from 'react';
import { Text } from 'react-native'
import { Button, Icon } from '@rneui/themed';
import TextoCentral from './TextoCentral';
import { StyleSheet } from 'react-native';
import UsersContext from './UserContextFile';
import UserList from './UserList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UsersProvider } from './UserContextFile';
import { useContext } from 'react';

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <UsersProvider>
            <NavigationContainer independent={true}>
                <Stack.Navigator>
                <Stack.Screen
                name="UserList"
                component={UserList}
                options={({ navigation }) => {
                const {state, dispatch} = useContext(UsersContext)
                return {
                    title: 'Lista de Usuários',
                }
                }}
            />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
        )
}

const style = StyleSheet.create({
    texto: {
        fontSize: 50,
    },
    tela: {
        flex: 1, //significa que pode oculpar a tela inteira
        justifyContent: "center", //eixo principal (vertical) conteudo é centralizado
        alignItems: 'center',
    }
})