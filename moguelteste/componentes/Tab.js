import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import TelaA from "./TelaA";
import TelaB from "./TelaB";
import TelaC from "./TelaC";

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor: 'blue',
        tabBarLabelStyle: {fontSize: 15}
    }}
    initialRouteName="TelaB"> 
         <Tab.Screen name="TelaA" component={TelaA} 
         options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            tabBarLabel: 'Home',
            title: 'Home'
         }}
         /> 
         <Tab.Screen name="TelaB" component={TelaB}
         options={{
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings" color={color} size={size} />
            ),
            title: 'Settings'
         }}/> 
         <Tab.Screen name="TelaC" component={TelaC}
         options={{
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="information-circle" color={color} size={size} />
            ),
            title: 'Informations'
         }}/>  
    </Tab.Navigator>

)