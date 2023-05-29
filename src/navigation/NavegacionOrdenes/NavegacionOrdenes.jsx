import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ordenes from '../../screens/Ordenes/Ordenes'

const NavegacionOrdenes = () => {

    const MyStack = createNativeStackNavigator()

    return (

        <MyStack.Navigator>
            <MyStack.Screen name='Ordenes' component={Ordenes} />
        </MyStack.Navigator>

    )
}

export default NavegacionOrdenes