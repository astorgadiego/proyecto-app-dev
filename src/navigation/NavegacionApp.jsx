import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Inicio from '../screens/Inicio/Inicio'
import Compra from '../screens/Compra/Compra'
import Categorias from '../screens/Categorias/Categorias'


const NavegacionApp = () => {

    const Mystack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Mystack.Navigator //LO QUE YO LE APLIQUE A MI STACKNAVIGATOR... SE LE VA A PLICAR A MIS PANTALLAS HIJAS!!
                initialRouteName='Bienvenido a la app de Diego'
                screenOptions={{ //EL SCREENOPTION MODIFICA OPCIONES DE MI STACKNAVIGATOR
                    headerStyle: { //--> ESTS OPCIONES YA EXISTEN NO SON COMO EN LOS STYLES
                        backgroundColor: "yellow",

                    },
                    headerTintColor: "blue", //COLOR DE LA LETRA DEL TITULO
                    headerTitleStyle: {
                        fontWeight: "bold" //ESTILO DE LA LETRA
                    }
                }}
            >

                <Mystack.Screen name='Bienvenido a la app de Diego' component={Inicio} options={{ title: "Bienvenido a San Telmo Food" }}/>
                {/* LO QUE YO MODIFIQUE EN .SCREEN SE LE VA A APLICAR UNICAMENTE A ESA PANTALLA */}
                <Mystack.Screen name='Compra' component={Compra}/>
                <Mystack.Screen name='Nuestros productos' component={Categorias}/>

            </Mystack.Navigator>
        </NavigationContainer>
    )
}

export default NavegacionApp