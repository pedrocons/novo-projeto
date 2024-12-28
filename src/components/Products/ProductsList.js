import React from "react";
import { Text } from 'react-native'
import styles from "../styles";
import Products from "./Products";
export default props => {
    function obterlista() {
        return Products.map(p => {
            return (
                <Text key={p.id}>
                    {p.id} : {p.nome} : {p.preco}
                </Text>
            )
        })

    }
    return (<>

        <Text style={styles.txtG}>
            Lista de Produtos
        </Text>
        {obterlista()}

    </>
    )




}