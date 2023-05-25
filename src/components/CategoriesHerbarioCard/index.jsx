import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export function CategoriesHerbarioCard({item}) {
  return (
    <TouchableOpacity >
        <ImageBackground source={item.image}  borderRadius={10} style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.text}>{item.name}</Text>
        </View>
    </ImageBackground>
    </TouchableOpacity>
  );
}