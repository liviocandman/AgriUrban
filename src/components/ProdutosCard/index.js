import { View, Text, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { styles } from './styles';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { THEME } from '../../theme';

export function ProdutosCard({item}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('product', item)}
      style={styles.container}
    >
        <View style={styles.shadowImage}>
          <Image source={item.image} style={{width: 150, height: 150}}/>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.titleCardText}>{item.name}</Text>
          <View style={styles.produtosStars}>
            <Ionicons name='star' size={12} color={THEME.COLORS.ACCENT_100}/>
            <Text style={{color: THEME.COLORS.ACCENT_100}}>{item.stars}</Text>
          </View>
          <View style={styles.priceAddLine}>
            <Text style={styles.price}>R$ {item.price}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('product', item)} style={styles.addBottom}>
              <MaterialCommunityIcons name='plus' size={25} color="white"/>
            </TouchableOpacity>
          </View>
        </View>
    </TouchableOpacity>
  );
}