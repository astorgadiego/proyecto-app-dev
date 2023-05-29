import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from '../../screens/Cart/Cart'

const NavegacionCart = () => {

    const MyStack = createNativeStackNavigator ()

  return (
    
    <MyStack.Navigator>
        <MyStack.Screen name='Cart' component={Cart} />
    </MyStack.Navigator>

  )
}

export default NavegacionCart