import { View, Text, TouchableOpacity } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'

import React from 'react'

const FormatearDia = (dia) => {

    const nuevoDia = new Date(dia)
    return nuevoDia.toLocaleString() //TOLOCALEDATESTRING ME FORMATE LA FECHA EN DD/MM/AAA!!! --> return nuevoDia.toLocaleDateString()
}

const FormatearHora = (dia) => { second }

const MyOrder = ({ theOrder, actionDelete }) => {
    return (
        <View style={{
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingVertical: 16,
            paddingHorizontal: 30,
            flexDirection: "row",
            alignItems: "center",
        }}>
            <View style={{
                marginLeft: 25,
                flex: 1,
                justifyContent: "center",
                alignItems: "flex-start",
            }}>
                <Text style={{
                    color: "#da627d",
                    fontSize: 18,
                    marginBottom: 6,
                }}>{FormatearDia(theOrder.date)}hs</Text>
                <Text style={{
                    color: "#777",
                    fontSize: 16,
                }} >Total: $ {theOrder.theTotal}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => actionDelete(theOrder.id)} >
                    <Ionicons name='md-trash' color={'red'} size={22} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyOrder