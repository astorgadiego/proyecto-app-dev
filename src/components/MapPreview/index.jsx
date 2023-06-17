import { View, Text, Image, StyleSheet } from 'react-native'
import React, {useEffect} from 'react'
import Map from '../../constants/Map'

const MapPreview = ( { Location , children, newStyles} ) => {

    const mapPreviewURL = Location ? `https://maps.googleapis.com/maps/api/staticmap?center=${Location.latitud},${Location.longitud}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${Location.latitud},${Location.longitud}&key=${Map.API_KEY_MAP}` : "" 
    
    return (
      <View style={ { ...styles.mapPreview, ...newStyles } } >
        { Location ? (<Image style={ styles.mapImage } source={{ uri: mapPreviewURL }} />) : ( children )  }
        {/* { Location ? (<Text>{Location.latitud}, {Location.longitud}</Text>) : ( children )  } */}
      </View>
    )
  }

export default MapPreview   

const styles = StyleSheet.create({
    mapPreview: {
        justifyContent: "center",
        alignItems: "center",
      },
      mapImage: {
        width: 300,
        height: 200,
      },
})