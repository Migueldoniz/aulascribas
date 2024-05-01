import React from 'react';
import { Alert, StyleSheet} from 'react-native';
import UserForm from './cadastro/UserForm';
import UserList from './cadastro/UserList';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Icon } from '@rneui/themed';
import { UsersProvider } from './cadastro/UserContextFile';
import UsersContext from './cadastro/UserContextFile';
import { useContext } from 'react';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='UserList'
          screenOptions={screenOptions}>
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({ navigation }) => {
              const {state, dispatch} = useContext(UsersContext)
              return {
                title: 'Lista de Usuários',
                headerRight: () => (
                  <>
                    <Button
                      onPress={() => navigation.navigate('UserForm')}
                      type='clear' // pode ser solid ou outline, nesse caso é sem fundo
                      icon={<Icon name="add" size={25} color="white" />} />
                    <Button
                    onPress={() => 
                        Alert.alert('Excluir Usuário', 'Deseja excluir a lista de usuários?', [
                          {
                              text: 'Sim',
                              onPress(){
                                  dispatch({
                                      type: 'deleteAll'
                                  })
                              }
                          },
                          {
                              text: 'Não'
                          }
                      ])
                    }
                    type='clear' // pode ser solid ou outline, nesse caso é sem fundo
                    icon={<Icon name="delete" size={25} color="white" />} />
                  </>
                )
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}
