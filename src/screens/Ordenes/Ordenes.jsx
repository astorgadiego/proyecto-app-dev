import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'

import orders from '../../data/orders'
import MyOrder from '../../components/RenderOrdenes'

import { useSelector, useDispatch } from 'react-redux'
import { getOrder } from '../../store/actions/action_ordenes'

const Ordenes = () => {

    const dispatchFromRedux = useDispatch()
    const OrdenesFromReducer = useSelector( estado => estado.globalOrdenes.listOfOrders )

    useEffect(() => {

        dispatchFromRedux( getOrder() )

    }, [])
    

    const handleDeleteOrder = () => {

        console.log('ELIMINAR ORDEN')
    }

    // const renderOrderItem = ({ item }) => (
        
    //     <MyOrder theOrder={item} actionDelete={handleDeleteOrder} />
    // )
    const renderOrderItem = ({ item }) => {
    console.log("DIEGOOOO", item)
    return( <MyOrder theOrder={item} actionDelete={handleDeleteOrder} />)
}
    return (
        <View>
            <FlatList
                // data={orders}
                data={ OrdenesFromReducer }
                renderItem={renderOrderItem}
                keyExtractor={order => order.id}

            />
        </View>
    )
}

export default Ordenes