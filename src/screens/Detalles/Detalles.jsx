import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Detalles = ({ route }) => {

  const ProductoFromReducer = useSelector( estado => estado.globalProducts.productoSeleccionado )

  const Producto = route.params.TodoElProducto
  return (
    <View>
      <Text>ACA VA EL DETALLE DEL PRODUCTO</Text>
      <Text>{ProductoFromReducer.nombre}</Text>
      <Text>{ProductoFromReducer.description}</Text>
      <Text>${ProductoFromReducer.precio}</Text>
    </View>
  )
}

export default Detalles