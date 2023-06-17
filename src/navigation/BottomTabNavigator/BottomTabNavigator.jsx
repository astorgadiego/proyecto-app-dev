import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View , Text} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons"


//ACA NECESITO IMPORTAR TODOS LOS NAVEGADORES O EL STACK QUE VOY A USAR COMO COMPONENTE DENTRO DE LAS PESTAÑAS DENTRO DE CADA UNO DE MIS TABS

import NavegacionApp from "../NavegacionApp/NavegacionApp";
import NavegacionCart from "../NavegacionCart/NavegacionCart";

import styles from "./styles";
import NavegacionOrdenes from "../NavegacionOrdenes/NavegacionOrdenes";
import NavegacionUbicacion from "../NavegacionUbicacion/NavegacionUbicacion";

const BottomNav = createBottomTabNavigator()

export default BottomTabNavigator = () => {
    return (

        <BottomNav.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.TabBar,
                tabBarHideOnKeyboard: true
            }}
        >

            <BottomNav.Screen
                name="Home"
                component={NavegacionApp}
                options={{
                    tabBarIcon: () => (
                        <View style={{justifyContent:"center", alignItems:"center"}} >
                            <Ionicons name="home" size={30} color="blue" />
                            <Text>Home</Text>
                        </View>

                    )
                }}
            />

            <BottomNav.Screen
                name="Pestaña Carrito"
                component={NavegacionCart}
                options={{
                    tabBarIcon: () => (
                        <View style={{justifyContent:"center", alignItems:"center"}} >
                            <Ionicons name="cart" size={30} color="blue" />
                            <Text>Cart</Text>
                        </View>

                    )
                }}
            />

            <BottomNav.Screen
                name="Ubicacion"
                component={NavegacionUbicacion}
                options={{
                    tabBarIcon: () => (
                        <View style={{justifyContent:"center", alignItems:"center"}} >
                            <Ionicons name="location" size={30} color="blue" />
                            <Text>Ubicacion</Text>
                        </View>

                    )
                }}
            />

            <BottomNav.Screen
                name="Pestaña Ordenes"
                component={NavegacionOrdenes}
                options={{
                    tabBarIcon: () => (
                        <View style={{justifyContent:"center", alignItems:"center"}} >
                            <Ionicons name="list" size={30} color="blue" />
                            <Text>Ordenes</Text>
                        </View>

                    )
                }}
            />

        </BottomNav.Navigator>

    )

}