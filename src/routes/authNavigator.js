import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigator } from './bottomTabNavigator';

import { Home } from '../screens/Home';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export function AuthNavigator() {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="home" component={BottomTabNavigator}	/>
    </Stack.Navigator>
 
  );
}