import React, { useState } from "react";
import { Text } from "react-native";
import styles from "../styles"
import Display from "./Display";
import CounterButton from "./CounterButton";

export default props => {
    const [num, setNum] = useState(0)
    const inc = () => { setNum(num + 1) }
    const dec = () => { setNum(num - 1) }
    return (
        <>
            <Text style={styles.txtG}>
                Counter V2
            </Text>
            <Display style={styles.txtG} num={num} />
            <CounterButton inc={inc} dec={dec} />
        </>
    )
}