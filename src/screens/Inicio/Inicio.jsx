import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const Inicio = ({ propAcceso, navigation }) => {
  return (
    <View>
      {/* <TouchableOpacity style={styles.botonInicio} onPress={ () => propAcceso() }>
        <Text style={styles.textoInicio} >Oprima aqui para inciar la app de Diego (Switch).</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.botonNavegacion} onPress={ () => navigation.navigate("Compra") }>
        <Text style={styles.textoInicio} >Navegar a Pagina de Compras!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Inicio