import { useState, useEffect } from 'react';
import { View, Text, LogBox, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar'

import Carousel from 'react-native-snap-carousel';

import { collection, onSnapshot } from "firebase/firestore";
import db from '../../../firebase';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';
import { produtosHome } from '../../constants';
import { ProdutosCard } from '../../components/ProdutosCard'
import { LojasCard } from '../../components/LojasCard';

export function Home() {
  const [lojas, setLojas] = useState([]);
  const [loading, setLoading] = useState(true);

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  useEffect(() => {

  async function getLojas() {
    try {
      setLoading(true)
  
      const colRef = collection(db, "lojas")
      onSnapshot(colRef, (lojas) =>
      setLojas(lojas.docs.map((item) => ({
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
  getLojas();
  }, [])

  
  return (
    <View style={styles.container}>
      
      <StatusBar  translucent={true}/>
        
        <SafeAreaView style={styles.content}>
  
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>

              <View></View>

              <View style={styles.location}> 
                <MaterialCommunityIcons name='map-marker' size={25} color={THEME.COLORS.ACCENT_100}/>
                <Text style={styles.text}>Recife, PE</Text>
              </View>

              <MaterialCommunityIcons name='cart' size={25}  color={THEME.COLORS.ACCENT_100}/>
            </View>
            <View style={styles.title}>
              <Text style={styles.textTitle} >Bem Vindo...</Text>
              <Text style={styles.textSubTitle}>Encontre sua comida orgânica favorita.</Text>
            </View>
            
            {/*Produtos cards */}
            <View style={styles.card}>
              <Text style={styles.titleCard}>Mais vendidos</Text>
              <Carousel
                containerCustomSlide={{overflow: 'hidden'}}
                data={produtosHome}
                renderItem={({item})=> <ProdutosCard item={item} />}
                firstItem={1}
                inactiveSlideOpacity={0.75}
                inactiveSlideScale={0.77}
                sliderWidth={400}
                itemWidth={180}
                slideStyle={{display: 'flex', alignItems: 'center'}}
              />
            </View>
            {/*Lojas cards */}
            <ScrollView style={styles.card}>
            <Text style={styles.titleCard}>Lojas</Text>
              <View style={{marginTop: 10}}>
              {lojas.map((item, index) => <LojasCard item={item} key={index}/>)}
              </View>
            </ScrollView>
                
          </ScrollView>
      </SafeAreaView>
   
    </View>
  );
}