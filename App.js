import React from 'react'
import { View, StyleSheet, Text } from "react-native";
//import ProductsList from './src/components/Products/ProductsList';
//import UserLog from './src/components/User.log';
//import Family from './src/components/Relacion/Family';
//import Members from './src/components/Relacion/Members';
//import styles from './src/components/styles';
//import Diferenciar from './src/components/diferenciar';
//import imparpar from './src/components/parimpar'
//import Parimpar from './src/components/parimpar';
//import CounteV2 from './src/components/Counter/CounteV2';
//import CounterButton from './src/components/Counter/CounterButton';
//import father from './src/components/father';
//import Title from './src/components/Title';
//import Button from './src/components/buttom';
//import Counter from './src/components/Counter';
//import father from './src/components/father';
//import ProductsListV2 from './src/components/Products/ProductsListV2';
//import Digiteseunome from './src/components/Digiteseunome';
//import Quadrado from './src/components/Layout/Quadrado';
import FlexBoxv1 from './src/components/FlexBoxv1';



export default () =>

    <View style={style.App}>
        <FlexBoxv1 />
        {/* <Minmax min={3} max={30}/>
        <Digiteseunome />
        <ProductsListV2 />
        <UserLog user={{ name: 'Pedro', email: 'Pedrohprates@hotmail.com' }} />
    <Family>
        <Members nome='Carlos' sobrenome='Eduardo' />
        <Members nome='Catarina' sobrenome='Paolino' />
    </Family>
        <Parimpar/>
        <Diferenciar/>
        <CounteV2 />
        <Counter inicial={50} />
        <Button />
        <Title principal='Hello Word'  secundatrio='Subtitulo' />
        {/*<Comp1 />
        <Primeiro />
        <Comp2 />*/}
    </View>

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    }
},
)