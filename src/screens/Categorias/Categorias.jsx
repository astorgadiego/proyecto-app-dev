import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'


import styles from './styles'

import categories from '../../data/categories'
import MyCategories from '../../components/RenderCategorias'

//---------------------------------------------------------------------------------------------

import { useSelector, useDispatch } from 'react-redux'
import { elegirCategoria } from '../../store/actions/action_categoria'

//----------------------------------------------------------------------------------------------

const Categorias = ({ navigation }) => {

    const CategoriasFromReducer = useSelector( estado => estado.globalCategories.theCategorias ) //EL USE SELECTOR NOS SIRVE PARA ACCEDER A UN ESTADO GLOBAL, DESDE REDU

    const dispatchFromRedux = useDispatch()

    const irAcategoria = (categoria) => {
        //QUIERO QUE CUANDO SE EJECUTE ESTA FUNCION SE DISPARE EL DISPATCH QUE EJECUTA MI ACCION
        dispatchFromRedux( elegirCategoria( categoria.id ) ) //--> CUANDO SE EJECUTE LA ACCION LE TENEMOS QUE MANDAR EL ID DE LA CATEGORIA COMO PARAMETRO

        navigation.navigate('Productos', {
            //IdCategory: categoria.id, ---->CON REDUX, YA NO NECESITAREMOS MANDAR EL ID DE LA CATEGORIA POR MEDIO DE LA RUTA
            nombreCategoria: categoria.titulo 
        })
    }


    const renderOfCategories = ({ item }) => (
        <View style={{margin: 10, justifyContent:"center", alignItems:"center"}} >
            <MyCategories theCategory={item} onCategorySelected={ irAcategoria } />
        </View>
    )


    return (
        <View style={styles.categoryConteiner}>  
        {/*EN ESTOS ESTILOS ES DONDE DEFINO QUE EL TAB NO TAPE MI LISTA!!!!*/}
        {/* // <View style={{ backgroundColor: "pink", marginBottom: 85, flex:1 }}> */}



            <TouchableOpacity style={styles.botonNavegacion} onPress={() => navigation.navigate("Compra")}>
                <Text style={{ ...styles.textoInicio, fontFamily: "Fuente3" }} >Navegar a Pagina de Compras!</Text>
            </TouchableOpacity>
            

            <FlatList
                // data={categories}
                data={CategoriasFromReducer}
                renderItem={renderOfCategories}
                keyExtractor={category => category.id}
            />
            
        </View>
    )
}

export default Categorias