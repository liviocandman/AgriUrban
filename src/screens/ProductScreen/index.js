import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

import { AntDesign, Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';
import { GoBackButtom } from '../../components/GoBackButtom';
import { CartIcon } from '../../components/CartIcon';


export function ProductScreen() {
    const route = useRoute();
    
  return (
    <View style={styles.container}>

        <SafeAreaView style={styles.content}>
            
            <View style={styles.image}>
                <Image source={route.params.image} style={{width: 200, height: 200}}/>
            </View>
            
            <GoBackButtom/>
           
            <View style={styles.produtosStars}>
                <Ionicons name='star' size={12} color={THEME.COLORS.ACCENT_100}/>
                <Text style={{color: THEME.COLORS.ACCENT_100}}>{route.params.stars}</Text>
            </View>
            <View style={styles.titlePriceLine}>
                <Text style={styles.titleProduct}>
                    {route.params.name}
                </Text>
                <Text style={styles.priceProduct}>
                    R$ {route.params.price}
                </Text>
            </View>
            <View style={styles.desc}> 
                <Text style={styles.priceProduct}>Sobre</Text>
                <Text style={styles.textDesc}>{route.params.desc}</Text>
            </View>
            <View style={styles.bottom}>
                <View style={styles.qtdeProduct}>
                    <Text style={styles.priceProduct}>
                        Quantidade:
                    </Text>
                    <View style={styles.plusMinusIcons}>
                        <TouchableOpacity>
                            <AntDesign name='minus' size={20} />
                        </TouchableOpacity>
                        <Text style={styles.priceProduct}>1</Text>
                        <TouchableOpacity>
                            <AntDesign name='plus' size={20}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
        <CartIcon title={'Adicionar'}/>
    </View>
  );
}