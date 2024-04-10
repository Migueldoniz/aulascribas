import React, { useContext } from "react";
import { Alert, FlatList } from "react-native";
import { View, Text } from "react-native";
import { ListItem, Avatar, Icon, Button } from "@rneui/themed";
import users from "./users";

export default props=>{
    
    function getUserItems({item : user}){
        return <Text> {user.name} </Text>
    }
    return(
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItems}
            />
        </View>
    )
}