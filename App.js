import { Provider } from 'react-redux';
import store from './src/store';

import { useState } from 'react';
import { useFonts } from 'expo-font';

// -------------IMPORTS DE MODULOS

import Compra from './src/screens/Compra/Compra';

import Inicio from './src/screens/Inicio/Inicio';
import NavegacionApp from './src/navigation/NavegacionApp/NavegacionApp';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator/BottomTabNavigator';

//-----------------------------------------------------

export default function App() {

  const [loaded] = useFonts({

    "Fuente1": require("./src/assets/fonts/Anton-Regular.ttf"),
    "Fuente2": require('./src/assets/fonts/ShadowsIntoLight-Regular.ttf'),
    "Fuente3": require('./src/assets/fonts/Mogra-Regular.ttf')

  });


  const [acceso, setAcceso] = useState(false)



  const handlerAcceso = () => {

    setAcceso(true)

  }


  if (!loaded) return null

  let content = <Inicio propAcceso={handlerAcceso} />;

  if (acceso) {

    content = <Compra />


  }


  return (
    // INTEGRACION DEL REDUX EN MI APP
    <Provider store={store}> 

      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>

    </Provider>

  );
}