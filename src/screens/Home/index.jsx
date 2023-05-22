import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar'
import { MaterialCommunityIcons, Entypo} from '@expo/vector-icons';
import { styles } from './styles';
import { THEME } from '../../theme';
import { FlatList } from 'react-native-gesture-handler';
import { categories, produtosHome } from '../../constants';
import { ProdutosCard } from '../../components/ProdutosCard'
import { useState } from 'react';
import Carousel from 'react-native-snap-carousel';

export function Home() {
  const [activeCategory, setActiveCategory] = useState(1);
  
  return (
    <View style={styles.topBackground}>
      <StatusBar />
      <Image source={require('../../assets/rectangleHome.png')} style={styles.greenBackground}/>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>

          <View></View>

          <View style={styles.location}> 
            <MaterialCommunityIcons name='map-marker' size={25} color={THEME.COLORS.ACCENT_100}/>
            <Text style={styles.text}>Recife, PE</Text>
          </View>

          <MaterialCommunityIcons name='account-circle' size={40} />
        </View>
        

        <View style={styles.searchBar}>
          <View style={styles.search}>
            <TextInput placeholder='Pesquisar' style={styles.searchInput}/>
            <TouchableOpacity style={styles.searchButton}>
              <Entypo name='magnifying-glass' size={25} color="white"  />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */ }  
        <View style={styles.categories}>
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item.id}
            style={{overflow: 'visible'}}
            renderItem={({item})=>{
              let isActive = item.id==activeCategory;
              let activeTextClass = isActive ? styles.activeCategoriesText : styles.categoriesText
              return(
                <TouchableOpacity style={Object.assign({backgroundColor: isActive ? THEME.COLORS.PRIMARY_100 : THEME.COLORS.OVERLAY}, styles.categoriesButtons)} onPress={() => setActiveCategory(item.id)} >
                  <Text style={Object.assign({}, styles.categoriesText, activeTextClass)}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )
            }} />
          </View>
          
            {/*Produtos cards */}
            <View style={styles.produtosCARD}>
            <Carousel
              containerCustomStyle={{overflow: 'visible'}}
              data={produtosHome}
              renderItem={({item})=> <ProdutosCard item={item} />}
              firstItem={1}
              inactiveSlideOpacity={0.75}
              inactiveSlideScale={0.77}
              sliderWidth={400}
              itemWidth={260}
              slideStyle={{display: 'flex', alignItems: 'center'}}
            />
            </View>
      </SafeAreaView>
    </View>
   
    

   
  );
}