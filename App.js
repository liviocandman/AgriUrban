
import { NavigationContainer } from '@react-navigation/native';
import { AuthSackNavigator } from './src/routes/authStackNavigator';




export default function App() {

  return (
    <NavigationContainer>
     <AuthSackNavigator />
    </NavigationContainer>
 
  );
}
