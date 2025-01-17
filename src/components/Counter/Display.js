import React from "react";
import { Text, View, StyleSheet } from "react-native";
import styles from "../styles";
import CounteV2 from "./CounteV2";

export default props => {
    return (
        <View style={style.display}>
            <Text style={[styles.txtG, style.DisplayText]} >
                {props.num}
            </Text>
        </View>
    )
}
const style = StyleSheet.create({
    display: {
        backgroundColor: '#000',
        padding: 20, 
        width: 300,
        borderRadius : 50,

    },
    DisplayText: {
        color: '#fff'
    }

})