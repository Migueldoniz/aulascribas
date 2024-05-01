import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import GerenciarEventos from "./GerenciarEventos";
import Home from "./Home";

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor: 'blue',
        tabBarLabelStyle: {fontSize: 15}
    }}
    initialRouteName="Home"> 
         <Tab.Screen name="Home" component={Home} 
         options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            tabBarLabel: 'Home',
            title: 'Home'
         }}
         /> 
         <Tab.Screen name="GerenciarEventos" component={GerenciarEventos}
         options={{
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings" color={color} size={size} />
            ),
            title: 'Gerenciar eventos'
         }}/> 
    </Tab.Navigator>

)