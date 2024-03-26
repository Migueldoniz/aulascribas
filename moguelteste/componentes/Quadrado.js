import React from "react";
import {StyleSheet, Text, View} from 'react-native'

export default props => {
    const styles = StyleSheet.create({
        container: {
            height: 50,
            width: 50,
            backgroundColor: props.cor || '#000'
        }
    })
    return(
        <View style={styles.container}></View>
    )
}