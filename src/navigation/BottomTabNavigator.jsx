import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View , Text} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons"


//ACA NECESITO IMPORTAR TODOS LOS NAVEGADORES O EL STACK QUE VOY A USAR COMO COMPONENTE DENTRO DE LAS PESTAÑAS DENTRO DE CADA UNO DE MIS TABS

import NavegacionApp from "./NavegacionApp";
import NavegacionCart from "./NavegacionCart";

const BottomNav = createBottomTabNavigator()

export default BottomTabNavigator = () => {
    return (

        <BottomNav.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.TabBar
            }}
        >

            <BottomNav.Screen
                name="Home"
                component={NavegacionApp}
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Ionicons name="home" size={30} color="blue" />
                            <Text>Home</Text>
                        </View>

                    )
                }}
            />
            <BottomNav.Screen
                name="Cart"
                component={NavegacionCart}
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Ionicons name="cart" size={30} color="blue" />
                            <Text>Cart</Text>
                        </View>

                    )
                }}
            />

        </BottomNav.Navigator>

    )

}

const styles = StyleSheet.create({
    TabBar: {

        backgroundColor: "#fff",
        paddingTop: 15,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        height: 85,
        position: "absolute",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,

    }
})