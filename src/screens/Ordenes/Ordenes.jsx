import { View, Text, FlatList } from 'react-native'
import React from 'react'

import orders from '../../data/orders'
import MyOrder from '../../components/RenderOrdenes'

const Ordenes = () => {

    const handleDeleteOrder = () => {

        console.log('ELIMINAR ORDEN')
    }

    const rednerOrderItem = ({ item }) => (
        <MyOrder theOrder={item} actionDelete={handleDeleteOrder} />
    )

    return (
        <View>
            <FlatList
                data={orders}
                renderItem={rednerOrderItem}
                keyExtractor={order => order.id}

            />
        </View>
    )
}

export default Ordenes