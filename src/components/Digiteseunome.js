import React, { useState } from "react";
import { View, TextInput,Text } from "react-native";
import styles from "./styles";

export default () => {
    const [nome, setnome] = useState('teste')
    return (
        <View>
            <Text>{nome}</Text>
            <TextInput
                placeholder="Digite seu nome :"
                value={nome}
                onChangeText={nome => setnome(nome)}



            />



        </View>
    )


}