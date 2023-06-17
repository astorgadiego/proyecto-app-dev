import { View, Text, Button, ScrollView } from 'react-native'
import React from 'react'

import LocationSelector from '../../components/LocationSelector'

const ObtenerUbicacion = ({ navigation }) => {

  const handleSave = () => {

    //dispatch( addPlace(title, myImage) );
    navigation.navigate("Direcciones");

  };

  return (
    <ScrollView>
      <View style={{ justifyContent: "center", alignItems: "center", }} >
        <Text style={{ textAlign: "center" }}>Necesitamos Obtener su Domicilio para poder Enviarle Su Pedido</Text>
        
        <LocationSelector />
        <Button
          title="Guardar direccion"
          color={"#a53860"}
          onPress={handleSave}
        />
      </View>
    </ScrollView>
  )
}

export default ObtenerUbicacion