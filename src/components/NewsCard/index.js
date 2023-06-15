import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';

import { styles } from './styles';

export function NewsCard({item}) {
  return (
    <TouchableOpacity 
      onPress={() => Linking.openURL(item.data.url)}
      style={styles.container}
    >
      <View style={styles.imageNews}>
        <Image source={{uri: item.data.image}} height={200} width={350} borderRadius={10}/>
      </View>
      <Text style={styles.titleNews}>{item.data.title}</Text>
    </TouchableOpacity>
  );
}