import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import MyCarrito from '../../components/RenderCarrito'

//------------------------------------------------------------------------

import { useSelector, useDispatch } from 'react-redux'
import { borrar_Item, confimarCarrito } from '../../store/actions/action-carrito'

//------------------------------------------------------------------------

const Cart = () => {

  const CarritoFromReducer = useSelector(estado => estado.globalCarrito.theItems)  //EL USE SELECTOR NOS SIRVE PARA ACCEDER A UN ESTADO GLOBAL, DESDE REDUX
  const TotalFromReducer = useSelector(estado => estado.globalCarrito.total)  //EL USE SELECTOR NOS SIRVE PARA ACCEDER A UN ESTADO GLOBAL, DESDE REDUX

  const dispatchFromRedux = useDispatch()


  const handleDeleteProducto = (id) => {

    dispatchFromRedux(borrar_Item(id))

    console.log("BORRE EL ITEM:", id)

  }

  const handleConfirmCart = () => {

    console.log('CONFIRME EL CARRITO')
    console.log("El carrito:", CarritoFromReducer)


    dispatchFromRedux(confimarCarrito(CarritoFromReducer, TotalFromReducer))

  }

  const renderCart = ({ item }) => (
    <MyCarrito producto={item} actionDelete={handleDeleteProducto} />
  )


  return (
    <View>
      <Text style={{ textAlign: "center", margin:20}}>SU CARRITO DE COMPRAS</Text>
      <View>
        <FlatList

          // data={ CART }
          data={CarritoFromReducer}
          renderItem={renderCart}
          keyExtractor={theProd => theProd.id}

        />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity onPress={handleConfirmCart} style={{
          backgroundColor: "orange",
          margin: 20,
          borderRadius: 35,
          height: 40,
          maxHeight: 80,
          width: "50%",
          justifyContent: "center",
          alignItems: 'center',
          shadowOpacity: 10,
          shadowRadius: 10
        }}>
          <Text>Confirmar La Compra</Text>
        </TouchableOpacity>
        <View>
          {/* <Text>Total: $100</Text> */}
          <Text style={{fontFamily:"Fuente1", fontSize:20, color:"green"}}>Total:$ {TotalFromReducer}</Text>
        </View>
      </View>
    </View>
  )
}

export default Cart