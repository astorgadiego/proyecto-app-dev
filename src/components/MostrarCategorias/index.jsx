import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './styles'

const MyCategories = ({ navigation }) => {
    return (
        <View>
            <View>
                <Text>Aca debajo van las categorias de los productos</Text>
            </View>
            <TouchableOpacity style={styles.botonNavegacion} onPress={() => navigation.navigate("Compra")}>
                <Text style={{ ...styles.textoInicio, fontFamily: "Fuente3" }} >Navegar a Pagina de Compras!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MyCategories
