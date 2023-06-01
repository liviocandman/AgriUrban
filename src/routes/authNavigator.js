import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigator } from './bottomTabNavigator';

import { Home } from '../screens/Home';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ProductScreen } from '../screens/ProductScreen';
import { StoreScreen } from '../screens/StoreScreen';
import { HerbarioCategoriesScreen } from '../screens/HerbarioCategoriesScreen';
import { HerbarioPlantsScreen } from '../screens/HerbarioPlantsScreen';

const Stack = createStackNavigator();

export function AuthNavigator() {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="home" component={BottomTabNavigator}	/>
        <Stack.Screen name="product" component={ProductScreen} />
        <Stack.Screen name="store" component={StoreScreen} />
        <Stack.Screen name="herbarioCategories" component={HerbarioCategoriesScreen} />
        <Stack.Screen name="herbarioPlants" component={HerbarioPlantsScreen} />
    </Stack.Navigator>
 
  );
}