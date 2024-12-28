import React from "react";
import { Text, FlatList } from 'react-native'
import styles from "../styles";
import Products from "./Products";
export default props => {

    productrender = ({ item: p }) => {
        return <Text>
            {p.id} {p.nome}
        </Text>

    }
    return (<>

        <Text style={styles.txtG}>
            Lista de Produtos V2
        </Text>
        <FlatList
            data={Products}
            keyExtractor={i => i.id}
            renderItem={productrender}
        />



    </>
    )




}