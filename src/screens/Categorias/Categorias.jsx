import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import MyCategories from '../../components/MostrarCategorias'
import styles from './styles'

const Categorias = ({ navigation }) => {
    return (
        // <View>
        //     <View>
        //         <Text>Aca debajo van las categorias de los productos</Text>
        //     </View>
        //     <TouchableOpacity style={styles.botonNavegacion} onPress={() => navigation.navigate("Compra")}>
        //         <Text style={{ ...styles.textoInicio, fontFamily: "Fuente1" }} >Navegar a Pagina de Compras!</Text>
        //     </TouchableOpacity>
        // </View>
        <MyCategories
         navigation={navigation}
        />
    )
}

export default Categorias