import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { styles } from './styles';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { THEME } from '../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import { categoriesHerbario, news } from '../../constants';
import { CategoriesHerbarioCard } from '../../components/CategoriesHerbarioCard';
import { NewsCard } from '../../components/NewsCard'

export function Herbario() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <SafeAreaView >
        <ScrollView>
           <View style={styles.header}>

          <View></View>

          <View style={styles.location}> 
            <MaterialCommunityIcons name='map-marker' size={25} color={THEME.COLORS.ACCENT_100}/>
            <Text style={styles.text}>Recife, PE</Text>
          </View>

          <MaterialCommunityIcons name='bell' size={25}  color={THEME.COLORS.ACCENT_100}/>
        </View>
        <View style={styles.title}>
          <Text style={styles.textTitle} >Herbário...</Text>
          <Text style={styles.textSubTitle}>Todas as informações que você precisa.</Text>
        </View>

        <View style={styles.searchBar}>
          <View style={styles.search}>
            <TextInput placeholder='Pesquisar' style={styles.searchInput}/>
            <TouchableOpacity style={styles.searchButton}>
              <Entypo name='magnifying-glass' size={25} color="white"  />
            </TouchableOpacity>
          </View>
        </View>

        {/*Categories */}
        <View style={styles.news}>
        <Text style={styles.titleCard}>Categorias</Text>
        <Carousel
              containerCustomSlide={{overflow: 'visible'}}
              data={categoriesHerbario}
              renderItem={({item})=> <CategoriesHerbarioCard item={item} />}
              firstItem={1}
              inactiveSlideOpacity={0.75}
              inactiveSlideScale={0.77}
              sliderWidth={400}
              itemWidth={230}
              slideStyle={{display: 'flex', alignItems: 'center'}}
            />
        </View>

        {/*News*/}
        <View style={styles.news}>
          <Text style={styles.titleCard}>Ultimas Notícias</Text>
          <ScrollView>
            {news.map((newsItem, index) => <NewsCard item={newsItem} key={index}/>)}
          </ScrollView>
        </View>
    
        </ScrollView>
      
      </SafeAreaView>
    </View>
  );
}