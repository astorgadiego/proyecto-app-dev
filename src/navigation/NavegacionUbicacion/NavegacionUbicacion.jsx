import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import ObtenerUbicacion from '../../screens/ObtenerUbicacion/ObtenerUbicacion'
import Direcciones from '../../screens/Direcciones/Direcciones'


const NavegacionUbicacion = () => {

  const MyStack = createNativeStackNavigator()

  return (
    <MyStack.Navigator>
        <MyStack.Screen name='Agregar Ubicacion' component={ObtenerUbicacion} />
        <MyStack.Screen name='Direcciones' component={Direcciones} />
    </MyStack.Navigator>
  )
}

export default NavegacionUbicacion