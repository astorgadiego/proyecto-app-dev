import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { CART } from '../../data/carrito'
import MyCarrito from '../../components/RenderCarrito'

//------------------------------------------------------------------------

import { useSelector, useDispatch } from 'react-redux'
import { borrar_Item, confimarCarrito } from '../../store/actions/action-carrito'

//------------------------------------------------------------------------

const Cart = () => {

  const CarritoFromReducer = useSelector( estado => estado.globalCarrito.theItems )  //EL USE SELECTOR NOS SIRVE PARA ACCEDER A UN ESTADO GLOBAL, DESDE REDUX
  const TotalFromReducer = useSelector( estado => estado.globalCarrito.total )  //EL USE SELECTOR NOS SIRVE PARA ACCEDER A UN ESTADO GLOBAL, DESDE REDUX

  const dispatchFromRedux = useDispatch()
  

  const handleDeleteProducto = ( id ) => {

    dispatchFromRedux( borrar_Item( id ) )

    console.log("BORRE EL ITEM:",id)
    
  }

  const handleConfirmCart = ( )=> {

    console.log('CONFIRME EL CARRITO')

    dispatchFromRedux( confimarCarrito( CarritoFromReducer, TotalFromReducer ) )
  
  }

  const renderCart = ( { item } ) => (
    <MyCarrito producto={item}  actionDelete={ handleDeleteProducto } />
  ) 


  return (
    <View>
      <Text>ACA VA EL CARRITO DE COMPRAS</Text>
      <View>
          <FlatList
          
          // data={ CART }
          data={ CarritoFromReducer }
          renderItem={ renderCart }
          keyExtractor={ theProd => theProd.id }
          
          />
      </View>
      <View>
          <TouchableOpacity onPress={ handleConfirmCart } >
            <Text>Confirmar</Text>
            <View>
              {/* <Text>Total: $100</Text> */}
              <Text>Total:$ { TotalFromReducer }</Text>
            </View>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart