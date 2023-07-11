import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ordenes from '../../screens/Ordenes/Ordenes'

const NavegacionOrdenes = () => {

    const MyStack = createNativeStackNavigator()

    return (

        <MyStack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor:"black"
            },
            headerTintColor:"white"
        }}
        >
            <MyStack.Screen name='Ordenes Confirmadas' component={Ordenes} />
        </MyStack.Navigator>

    )
}

export default NavegacionOrdenes