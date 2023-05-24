import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'


import styles from './styles'



const Inicio = ({ propAcceso, navigation }) => {

  const [loaded] = useFonts({

    "Fuente1": require("../../assets/fonts/Anton-Regular.ttf"),
    "Fuente2": require('../../assets/fonts/ShadowsIntoLight-Regular.ttf'),
    "Fuente3": require('../../assets/fonts/Mogra-Regular.ttf')

  });

  if (!loaded) return null

  return (
    <View style={styles.InicioContainer}>
      <TouchableOpacity style={styles.botonNavegacion} onPress={ () => navigation.navigate("Nuestros productos") }>
        <Text style={{...styles.textoInicio, fontFamily:"Fuente1"}} >Navegar a Pagina de Compras!</Text>
      </TouchableOpacity>
    </View>
  )
}



export default Inicio