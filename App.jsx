
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { AuthNavigator } from './src/routes/authNavigator';

export default function App() {

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
 
  );
}
