import { View, Text, TouchableOpacity } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'

import React from 'react'

const FormatearDia = (dia) => {

    const nuevoDia = new Date(dia)
    return nuevoDia.toLocaleDateString() //TOLOCALEDATESTRING ME FORMATE LA FECHA EN DD/MM/AAA!!!
}

const MyOrder = ( {theOrder, actionDelete} ) => {
    return (
        <View>
            <View>
                <Text>{FormatearDia(theOrder.date)}</Text>
                <Text>Total: $ {theOrder.theTotal}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => actionDelete( theOrder.id )} >
                    <Ionicons name='md-trash' color={'purple'} size={22} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyOrder