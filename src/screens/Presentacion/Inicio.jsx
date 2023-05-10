import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const Inicio = ({ propAcceso }) => {
  return (
    <View>
      <TouchableOpacity style={styles.botonInicio} onPress={ () => propAcceso() }>
        <Text style={styles.textoInicio} >Oprima aqui para inciar la app de Diego.</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Inicio