import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Inicio from '../screens/Inicio/Inicio'
import Compra from '../screens/Compra/Compra'


const NavegacionApp = () => {
  
    const Mystack = createNativeStackNavigator () 

    return (
    <NavigationContainer>
        <Mystack.Navigator initialRouteName='Inicio' >
            <Mystack.Screen name='Inicio' component={ Inicio }></Mystack.Screen>
            <Mystack.Screen name='Compra' component={ Compra }></Mystack.Screen>
        </Mystack.Navigator>
    </NavigationContainer>
  )
}

export default NavegacionApp

const styles = StyleSheet.create({})