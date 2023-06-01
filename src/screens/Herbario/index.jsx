import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import db from '../../../firebase';

import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';
import { CategoriesHerbarioCard } from '../../components/CategoriesHerbarioCard';
import { NewsCard } from '../../components/NewsCard'


export function Herbario() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([])

  useEffect(() => {

    async function getCategoriesHerbariumAndNews() {
      try {
        setLoading(true)
    
        const colRef = collection(db, "herbario");
        const q = query(colRef, orderBy("name"));
        onSnapshot(q, (categories) =>
        setCategories(categories.docs.map((item) => ({
          id: item.id,
          data: item.data()
        })))
        )

        const newsRef = collection(db, "news");
        const q2 = query(newsRef, orderBy("date"));
        onSnapshot(q2, (news) =>
        setNews(news.docs.map((item) => ({
          id: item.id,
          data: item.data()
        })))
        )
  
      }catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    } 
    getCategoriesHerbariumAndNews();
    }, [])

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
              data={categories}
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
          <Text style={styles.titleCard}>Artigos</Text>
          <ScrollView>
            {news.map((newsItem, index) => <NewsCard item={newsItem} key={index}/>)}
          </ScrollView>
        </View>
    
        </ScrollView>
      
      </SafeAreaView>
    </View>
  );
}