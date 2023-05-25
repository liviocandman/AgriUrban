import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar'
import { MaterialCommunityIcons, Entypo} from '@expo/vector-icons';
import { styles } from './styles';
import { THEME } from '../../theme';
import { categories, produtosHome } from '../../constants';
import { ProdutosCard } from '../../components/ProdutosCard'
import { useState } from 'react';
import Carousel from 'react-native-snap-carousel';

export function Home() {
  const [activeCategory, setActiveCategory] = useState(1);
  
  return (
    <View style={styles.topBackground}>
      <StatusBar  />
  
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>

          <View></View>

          <View style={styles.location}> 
            <MaterialCommunityIcons name='map-marker' size={25} color={THEME.COLORS.ACCENT_100}/>
            <Text style={styles.text}>Recife, PE</Text>
          </View>

          <MaterialCommunityIcons name='cart' size={25}  color={THEME.COLORS.ACCENT_100}/>
        </View>
        <View style={styles.title}>
          <Text style={styles.textTitle} >Bom dia...</Text>
          <Text style={styles.textSubTitle}>Encontre sua comida orgânica favorita.</Text>
        </View>


      
            
            {/*Produtos cards */}
            <View style={styles.produtosCard}>
              <Text style={styles.titleCard}>Mais vendidos</Text>
            <Carousel
              containerCustomSlide={{overflow: 'visible'}}
              data={produtosHome}
              renderItem={({item})=> <ProdutosCard item={item} />}
              firstItem={1}
              inactiveSlideOpacity={0.75}
              inactiveSlideScale={0.77}
              sliderWidth={400}
              itemWidth={220}
              slideStyle={{display: 'flex', alignItems: 'center'}}
            />
            </View>
      </SafeAreaView>
    </View>
   
    

   
  );
}