import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MyProducts = ( { theProduct, onProductSelected } ) => {
  return (
    <TouchableOpacity onPress={() => onProductSelected( theProduct )} style={{borderRadius:30, backgroundColor:"red", height:"100%", shadowColor:"#1BDEAC", shadowOpacity:50,
    shadowRadius:8, elevation:10, }}>
        
        <View style={{backgroundColor:"yellow",alignItems:"center",  justifyContent:"center", height:"70%", maxHeight:"70%", borderRadius:30 }}>
            <Image style={{resizeMode:"contain", height:"90%", maxHeight:"90%"}} source={theProduct.img}/>
        </View>
        <View style={{justifyContent:"center", alignItems:"center" , height:"30%", maxHeight:"30%"}}>
            <Text style={{color:"white",fontFamily:"Fuente1"}}>{theProduct.nombre}</Text>
            <Text style={{color:"white",fontSize:11, textAlign:"center"}}>{theProduct.description}</Text>
            <Text style={{color:"white"}}>${theProduct.precio}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default MyProducts