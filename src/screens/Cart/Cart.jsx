import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { CART } from '../../data/carrito'
import MyCarrito from '../../components/RenderCarrito'

const Cart = () => {

  const handleDeleteProducto = ( id ) => {

    console.log(id)
    
  }

  const renderCart = ( { item } ) => (
    <MyCarrito producto={item}  actionDelete={ handleDeleteProducto } />
  ) 


  return (
    <View>
      <Text>ACA VA EL CARRITO DE COMPRAS</Text>
      <View>
          <FlatList
          
          data={ CART }
          renderItem={ renderCart }
          keyExtractor={ theProd => theProd.id }
          
          />
      </View>
      <View>
          <TouchableOpacity>
            <Text>Confirmar</Text>
            <View>
              <Text>Total: $100</Text>
            </View>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart