import { NavigationContainer } from "@react-navigation/native"
import Login from "../Pages/login"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Tabs from "../component/Tabs/Tabs"
import Otp from "../Pages/AuthMod/OtpMod"

const RootNavigator = () =>{
    const stack = createNativeStackNavigator()

        return(
        <NavigationContainer>
            <stack.Navigator screenOptions={{
                headerStyle:{
                    backgroundColor: 'transparent'
                },
                headerTransparent: true,
                headerTitle: ''
            }} initialRouteName="Otp">
            <stack.Screen name="Login" component={Login}/>
            <stack.Screen name="Otp" component={Otp}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator