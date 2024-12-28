import React from "react"
import { Text } from "react-native"
import styles from "./styles"

export default props => {
    if (props.test) {
        return props.children

    } else {
        return <Text style={styles.txtG} > Chupa aqui tchutchuca
        </Text>
    }
}