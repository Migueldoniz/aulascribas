import React from "react";
import TelaA from "./TelaA";
import TelaB from "./TelaB";
import TelaC from "./TelaC";
import MyStack from "./MyStack";
import Tab from "./Tab";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator()

export default props => (
    <Drawer.Navigator initialRouteName="Tab">
        <Drawer.Screen name="MyStack" component={MyStack}/>
        <Drawer.Screen name="Tab" component={Tab}/>
        <Drawer.Screen name="TelaC" component={TelaA}/>

    </Drawer.Navigator>
)