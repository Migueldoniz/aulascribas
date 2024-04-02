import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View,Button,Text } from "react-native";
import TelaA from "./TelaA";
import TelaB from "./TelaB";
import TelaC from "./TelaC";
import PassoStack from "./PassoStack";

const Stack = createNativeStackNavigator()


export default props => (
    <Stack.Navigator initialRouteName="TelaA"
        screenOptions={{headerShown: true}}>  

        <Stack.Screen 
            name="TelaA" 
            component={TelaA}
            options={{ title: 'Informações Iniciais' }}>
        </Stack.Screen>   
        <Stack.Screen name="TelaB">
            {props =>(
                <PassoStack {...props} avancar="TelaC">
                    <TelaB/>    
                </PassoStack>
            )}            
        </Stack.Screen>
        <Stack.Screen name="TelaC" component={TelaC}/>
        
    </Stack.Navigator>

)
// function TelaA({ navigation }) {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Aqui é a Tela A!</Text>
//             <Button
//             title="Ir para Tela B"
//             onPress={() => navigation.navigate('TelaB')}
//             />
//         </View>
//     );
// }

// function TelaB({ navigation }) {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Aqui é a Tela B!</Text>
//             <Button title="Ir para Tela A" onPress={() => navigation.navigate('TelaA')} />
//         </View>
//     );
// }
