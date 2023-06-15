import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export function CategoriesHerbarioCard({item}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('herbarioCategories', 
      {
      ...item
      })}_
    >
        <ImageBackground testID='categoriesHerbariumImage' source={{uri: item.data.image}}  borderRadius={10} style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.text}>{item.data.name}</Text>
        </View>
    </ImageBackground>
    </TouchableOpacity>
  );
}