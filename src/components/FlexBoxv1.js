import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Layout/Quadrado";

export default () => {
    return (
        <View style={StyleSheet.FlexV1}>
            <Quadrado />
            <Quadrado color='#F00' />
            <Quadrado color='#0F0' />
        </View>
    )
}
const style = StyleSheet.create({
    FlexV1: { flex: 1 ,
        backgroundColor: '#000',
    }
})