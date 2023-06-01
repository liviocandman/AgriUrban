import { useEffect, useState } from 'react';
import { TextInput, View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { WebView } from 'react-native-webview';
import MapView, {Callout, Marker} from 'react-native-maps'
import * as Location from 'expo-location'
import { styles } from './styles';
import { collection, onSnapshot } from "firebase/firestore";
import db from '../../../firebase';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { THEME } from '../../theme';
import { useNavigation } from '@react-navigation/native';

export  function Busca() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [markers, setMarkers] = useState([]);
  const [filter, setFilter] = useState('');
  const navigation = useNavigation();

  const filteredData = markers.filter(m => m.id == filter)
  
  useEffect(() => {

    async function getLocation() {
      try {
        setLoading(true)
        let {status} = await Location.requestForegroundPermissionsAsync();
    
        if(status !== 'granted') {
        console.log("Permission to access location was denied");
        }
        let currentPosition = await Location.getCurrentPositionAsync({});

        setLocation({
          latitude: currentPosition.coords.latitude,
          longitude: currentPosition.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        });
        
        const colRef = collection(db, "lojas");
        onSnapshot(colRef, (lojas) =>
        setMarkers(lojas.docs.map((item) => ({
          id: item.id,
          data: item.data(),
     
        })))
        )
      
      }catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    } 
    getLocation()
    }, [])

    if(!markers || markers.length === 0) {
      return <ActivityIndicator />
    }
    
   
  return loading ? <ActivityIndicator/> : <SafeAreaView style={styles.container}>
  <StatusBar translucent />
  <View>
        <View style={styles.header}>

    <View style={styles.location}> 
      <MaterialCommunityIcons name='map-marker' size={25} color={THEME.COLORS.ACCENT_100}/>
      <Text style={styles.text}>Recife, PE</Text>
    </View>
  
  </View>

  <View style={styles.searchBar}>
    <View style={styles.search}>
      <TextInput placeholder='Restaurantes, lugares, tipos de comida...' style={styles.searchInput}/>
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
           data={markers}
           keyExtractor={item => item.id}
           style={{overflow: 'visible'}}
           renderItem={({item})=>{
             let isActive = item.id==filter;
             let activeTextClass = isActive ? styles.activeCategoriesText : styles.categoriesText
             let activeCategories = isActive ? styles.activeCategories : styles.categoriesButtons
        
             return(
               <TouchableOpacity 
                style={activeCategories} 
                onPress={() => {
                  setFilter(filter == item.id ? "" : item.id)
                }}
               set >
                   
                 <Text style={activeTextClass}>
                   {item.data.category}
                 </Text>
               </TouchableOpacity>
             )
           }} />
         </View>
        
  </View>
  
  <MapView 
    style={styles.map} 
    showsUserLocation={true}
    region={location}
    zoomEnabled={true}
  >
    {(filter ? filteredData : markers).map((item)=> 
    <Marker
      coordinate={{
        latitude: item.data.latitude,
        longitude: item.data.longitude
      }}
      key={item.id}
      pinColor ={ THEME.COLORS.PRIMARY_100}
    >
      
      <Callout 
        tooltip
        onPress={() => navigation.navigate('store', 
    {
    ...item
    })}
      >
        <View >
        
          <View style={styles.bubble}>
          <WebView style={styles.imageStores} source={{uri: item.data.image}} />
            <View style={styles.infoStore}>
        
              <Text style={styles.titleCardText}>{item.data.name}</Text>
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
          <View style={styles.arrowBorder} />
          <View style={styles.arrow} />
        </View>
      </Callout>
    </Marker>)}
  </MapView>
</SafeAreaView>
}