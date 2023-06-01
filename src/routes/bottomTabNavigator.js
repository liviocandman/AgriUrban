import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Busca } from '../screens/Busca';
import { Herbario } from '../screens/Herbario';
import { Perfil } from '../screens/Perfil';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { THEME } from '../theme';

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator 
        screenOptions={{
            headerShown:false,
            tabBarActiveTintColor: THEME.COLORS.PRIMARY_100,
            tabBarStyle: { 
                borderTopColor: 'transparent',
                paddingBottom:5,
                paddingTop:5, 
            },
        }}
    
    >
    <Tab.Screen 
        name="Início" 
        component={Home}
        options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home-outline" color={color} size={size} />
            ),
          }} 
    />
     <Tab.Screen 
        name="Busca" 
        component={Busca}
        options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" color={color} size={size} />
            ),
          }} 
    />
    <Tab.Screen 
        name="Herbário" 
        component={Herbario}
        options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="flower-tulip-outline" color={color} size={size} />
        ),
      }}  
    />
      
    <Tab.Screen 
        name="Perfil"
        component={Perfil}
        options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-circle-outline" color={color} size={size} />
        ),
      }}  
    />
    </Tab.Navigator>
  );
}