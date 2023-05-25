import { StyleSheet, View,Text } from 'react-native';

import { useState } from 'react';
import { useFonts } from 'expo-font';

// -------------IMPORTS DE MODULOS

import Compra from './src/screens/Compra/Compra';

import Inicio from './src/screens/Inicio/Inicio';
import NavegacionApp from './src/navigation/NavegacionApp';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

//-----------------------------------------------------

export default function App() {

  const [loaded] = useFonts({

    "Fuente1": require("./src/assets/fonts/Anton-Regular.ttf"),
    "Fuente2": require('./src/assets/fonts/ShadowsIntoLight-Regular.ttf'),
    "Fuente3": require('./src/assets/fonts/Mogra-Regular.ttf')

  });


  const [ acceso, setAcceso ] = useState (false)



  const handlerAcceso = ()=> { 

    setAcceso( true )

  }

  
  if (!loaded) return null

  let content = <Inicio propAcceso={ handlerAcceso } />;

  if ( acceso ) {

    content=<Compra/>
  
    
  }


  return (

    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
    
  );
}