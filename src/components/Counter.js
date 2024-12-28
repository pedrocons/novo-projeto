import React ,{useState} from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

export default props => {
    //let numero = props.inicial
    const [ numero ,setNumero] = useState(props.inicial)
    
    const  inc = () =>  {setNumero (numero + 1)} 
    const  dec = () =>  {setNumero (numero - 1)} 
    return(
    <>
        <Text style={styles.txtG}>{numero}</Text>
        <Button title="+" onPress={ inc } />
        <Button title="-" onPress={ dec } />
        </>
    )


}