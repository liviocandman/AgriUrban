import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

export function NewsCard({item}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageNews}>
        <Image source={item.image} height={200} width={350} borderRadius={10}/>
      </View>
      <Text style={styles.titleNews}>{item.title}</Text>
    </TouchableOpacity>
  );
}