import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'


import styles from './styles'



const Inicio = ({ propAcceso, navigation }) => {


  return (
    <View style={styles.InicioContainer}>
      <TouchableOpacity style={styles.botonNavegacion} onPress={ () => navigation.navigate("Nuestros productos") }>
        <Text style={styles.textoInicio} >Navegar a Pagina de Compras!</Text>
      </TouchableOpacity>
    </View>
  )
}



export default Inicio