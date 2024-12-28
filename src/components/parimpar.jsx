import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default ({ num = 0 }) => {
    if (num % 2 === 0) {
        return (
            <View>
                <Text style={styles.txtG}>
                    O resultado é :
                </Text>
                {
                    num % 2 === 0
                        ? <Text style={styles.txtG} >
                            Par
                        </Text>
                        : <Text style={styles.txtG} > Impar </Text>
                }
            </View>
        )

    }
}