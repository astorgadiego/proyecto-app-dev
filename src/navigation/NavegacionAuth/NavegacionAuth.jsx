import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../../constants/colors";

import Auth from "../../screens/Auth/Auth";

const MyStack = createNativeStackNavigator()

export default NavegacionAuth = () => {
    return (
    
        <MyStack.Navigator
        
        initialRouteName="Login"
        screenOptions={{
            headerShadowVisible: false,
            headerTitleStyle: {
                fontWeight:"bold"
            }
        }}

        >
            <MyStack.Screen name='Login' component={Auth} />
        </MyStack.Navigator>
    
      )

}

