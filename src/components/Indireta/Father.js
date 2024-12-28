import { React, useState } from "react";
import { Text } from "react-native";
import styles from "../styles";
import Son from "../Son";

export default props => {

    const [num, setNum] = useState(0)

    function exibirValor(numero) {
        setNum(numero)

    }

    return (
        <>
            <Text>{num}</Text>
            <Son
                min={1}
                max={60}
                funcao={exibirValor}

            />
        </>
    )
}
