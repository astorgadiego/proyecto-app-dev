import React , {useState}from 'react'
import { NavigationContainer } from '@react-navigation/native'

import BottomTabNavigator from './BottomTabNavigator/BottomTabNavigator'
import NavegacionAuth from './NavegacionAuth/NavegacionAuth'

import { useSelector } from 'react-redux'


const index = () => {

    const [usuario, setUsuario] = useState(null)

    const usuarioID = useSelector( state => state.globalAuth.theUserId )
  return (
    <NavigationContainer>
        {/* SI EL USUARIO EXISTE VA A MOSTRAR EL BOTTOMTAB, SI EL USUARIO NO EXISTE VA A MOSTRAR EL STACK DE NAVEGACIONAUTH */}
        {usuarioID ? <BottomTabNavigator/> : <NavegacionAuth/>}
    </NavigationContainer>
  )
}

export default index