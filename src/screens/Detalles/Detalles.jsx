import { View, Text, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../../store/actions/action-carrito'

const Detalles = ({ route }) => {

  const dispatchFromRedux = useDispatch()

  const ProductoFromReducer = useSelector( estado => estado.globalProducts.productoSeleccionado ) //-->ESTE ES MI PRODUCTO SELECCIONADO AL CUAL ACCEDO DE FORMA GLOBAL


  const handleAddProduct = () => {
    dispatchFromRedux( addItem( ProductoFromReducer ) )
  }

  return (
    <View>
      <Text>ACA VA EL DETALLE DEL PRODUCTO</Text>
      <Text>{ProductoFromReducer.nombre}</Text>
      <Text>{ProductoFromReducer.description}</Text>
      <Text>${ProductoFromReducer.precio}</Text>
      <Button title='Agregar al Carrito' onPress={ handleAddProduct } />
    </View>
  )
}

export default Detalles