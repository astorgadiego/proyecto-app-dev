import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'

import products from '../../data/products'

import MyProducts from '../../components/RenderProductos'
import { useSelector, useDispatch } from 'react-redux'
import { elegirProducto, filtrarProductos} from '../../store/actions/action_productos'

const Productos = ({ navigation, route }) => {

  const prodFiltradoFromReducer = useSelector( estado => estado.globalProducts.ProductosFiltrados )
  const categoriaSeleccionadaFromReducer = useSelector( estado => estado.globalCategories.CategoriaSeleccionada )
  const dispatchFromRedux = useDispatch()
  
  //const prodFiltrado = products.filter( prod => prod.category === route.params.IdCategory  ) //ACA HAGO EL FILTRADO DE PRODUCTOS POR SU CATEGORIA
  

  useEffect(() => {
    dispatchFromRedux( filtrarProductos ( categoriaSeleccionadaFromReducer.id ) ) //ENTRE PARENTESIS LE MANDO LA ACCION QUE QUIERO EJECUTAR
  }, [])
  

  const handleProductSelected = ( prod ) => {

    dispatchFromRedux( elegirProducto( prod.id ) ) //--->LE MANDO EL ID DEL PRODUCTO SELECCIONADO

    navigation.navigate('Detalles', {
      nombreDeProducto: prod.nombre,
      //TodoElProducto : prod
    })
  }

  const renderOfProducts = ( { item } )=>(
    <View style={{margin:10, justifyContent:"center",  height:240, maxHeight:240, width:185, maxWidth:185}}>
        <MyProducts theProduct={item} onProductSelected={ handleProductSelected }/>
    </View>
  )
    
  return (
    <View style={{ flex:1,backgroundColor: "pink",marginBottom: 85 }} >
        {/*EN ESTOS ESTILOS ES DONDE DEFINO QUE EL TAB NO TAPE MI LISTA!!!!*/}
      <Text>ACA DEBAJO VAN LOS PRODUCTOS DE LA CATEGORIA SELECCIONADA</Text>

      <FlatList
        // data={prodFiltrado}
        data={prodFiltradoFromReducer}
        renderItem={ renderOfProducts }
        keyExtractor={prod => prod.id}
        numColumns={2}
      />
    </View>
  )
}

export default Productos