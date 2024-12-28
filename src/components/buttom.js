import React from "react";
import { View, Button,Text } from "react-native";

export default () =>{

    function executar() {
        console.warn('Funfou pourra')
        
    }
    return <Button  title="Cadastrar"
    onPress={executar}
    />

}