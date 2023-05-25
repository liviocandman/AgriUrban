import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native'



import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '../../theme';

export function ProductScreen() {
    const route = useRoute();
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Image style={styles.greenBackground} source={require('../../assets/rectangleHome.png')}/>
        <SafeAreaView style={styles.content}>
            <View style={styles.topIcons}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle-outline" size={40} color={THEME.COLORS.ACCENT_100}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="heart-circle-outline" size={40} color={THEME.COLORS.ALERT}/>
                </TouchableOpacity>
            </View>
            <View style={styles.image}>
                <Image source={route.params.image} style={{width: 200, height: 200}}/>
            </View>
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
        {/*Buy now button */}
        <View style={styles.buyNowLine}>
            <TouchableOpacity style={styles.bagIcon}>
                <Feather name='shopping-bag' size={30}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyNowButton}> 
                <Text style={styles.textButton}>Comprar</Text>
            </TouchableOpacity>
        </View>
        </View>
        </SafeAreaView>
    </View>
  );
}