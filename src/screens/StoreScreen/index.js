import { View, Image, Text, SafeAreaView, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native'

import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';
import { DishesCard } from '../../components/DishesCard';
import { CartIcon } from '../../components/CartIcon';
import { GoBackButtom } from '../../components/GoBackButtom';


export function StoreScreen() {
    const {params} = useRoute();
    let item = params;

  return (
 
    <View style={styles.container}>

        <ScrollView>
     
            <SafeAreaView>
            <View style={{position:'relative'}}> 
                <Image style={{width: '100%', height: 250}} source={{uri: item.data.image}}/>
                <GoBackButtom />
            </View>
            <View
                style={styles.cardRadius}
            > 
                <View style={styles.paddingHorizontal}>
                    <Text style={styles.titleNameStore}>
                        {item.data.name}
                    </Text>
                    <View style={styles.infoStore}>
                        <View style={styles.produtosStars}>
                            <Ionicons name='star' size={13} color={THEME.COLORS.ACCENT_100}/>
                            <Text style={{color: THEME.COLORS.ACCENT_100}}>{item.data.stars}</Text>
                            <Text style={styles.storeCategory}>{item.data.category}</Text>
                        
                        </View>
                        <View style={styles.contact}>
                            <Ionicons name='call' size={13} color={THEME.COLORS.CAPTION_500}/>
                            <Text style={styles.contactPhone}>{item.data.contact}</Text>
                        </View>
                    </View>
                </View>   
            </View>
            <View style={styles.storeMenu}>
                <Text style={styles.titleMenu}>Menu</Text>
                {item.data.dishes.map(({...dish}, index)=>{
                    return (
                        <DishesCard item={{...dish}} key={index} />
                    )
                })}
            </View>
            </SafeAreaView>
        </ScrollView>

        <CartIcon title={'Comprar'}/>
                
    </View>
  );
}
