import React from "react";
import { Text, Platform } from "react-native";
import styles from "./styles";

export default _ => {

    if (Platform.OS === 'Android') {

        <Text style={styles.txtG} >Android</Text>
    } else if (Platform.OS === 'ios') {
        <Text style={styles.txtG} >ios</Text>

    } else {
        <Text style={styles.txtG} >ios</Text>
    }

}