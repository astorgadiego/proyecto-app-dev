import { View, Text, Button, ScrollView } from 'react-native'
import React , {useState }from 'react'

import LocationSelector from '../../components/LocationSelector'
import { addPlace } from '../../store/actions/action_direcciones'
import { useDispatch } from 'react-redux'

const ObtenerUbicacion = ( { navigation } ) => {

  const dispatchFromRedux = useDispatch()

  const [theLocation, setTheLocation] = useState()

  const handleSave = () => {

    //dispatch( addPlace(title, myImage) );
    dispatchFromRedux( addPlace( theLocation ) )
    navigation.navigate("Direcciones");

  };

  return (
    <ScrollView>
      <View style={{ justifyContent: "center", alignItems: "center", }} >
        <Text style={{ textAlign: "center" }}>Necesitamos Obtener su Domicilio para poder Enviarle Su Pedido</Text>
        
        <LocationSelector  onLocation={ setTheLocation } />
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