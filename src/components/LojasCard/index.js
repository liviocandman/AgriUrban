import { View, Text, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { Ionicons} from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';

export function LojasCard({item}) {
  const navigation = useNavigation();
  //console.log(item.data.dishes)

  return (
    <TouchableOpacity style={styles.container}
    onPress={() => navigation.navigate('store', 
    {
    ...item
    })}>
        <View style={styles.shadowImage}>
          <Image source={{uri: item.data.image}} style={styles.storeImage}/>
        </View>
        
        <View style={styles.infoCard}>
          
          <Text style={styles.titleCardText}>{item.data.name}</Text>
          
          <View style={styles.produtosStars}>
            <Ionicons name='star' size={12} color={THEME.COLORS.ACCENT_100}/>
            <Text style={styles.starsText}>{item.data.stars}</Text>
            <Text style={styles.storeCategory}>{item.data.category}</Text>
          </View>
         
          <View style={styles.contact}>
                
            <Ionicons name='call' size={13} color={THEME.COLORS.CAPTION_500}/>
            <Text style={styles.contactPhone}>{item.data.contact}</Text>

          </View>

        </View>
    </TouchableOpacity>
  );
}