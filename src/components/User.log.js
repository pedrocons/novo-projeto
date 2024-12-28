import React from "react";
import { Text } from "react-native";
import styles from "./styles"
import If from './if'

export default ({ user = {} }) => {
    return (
        <>
            <If test={false}>
                <Text style={styles.txtG}>
                    Usuário Logado :
                </Text>
                <Text style={styles.txtG}> {user.name} {'\n'} {user.email}
                </Text>
            </If >
        </>

    )
}