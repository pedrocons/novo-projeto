import React from "react";
import { Text, View } from "react-native";
import Estilo from './styles'

export default props =>{
    return <View>
        <Text style={Estilo.txtG}>
            {props.principal}
        </Text>
        <Text>
            {props.secundario}
        </Text>
    </View>
 
}