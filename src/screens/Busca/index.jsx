import { useEffect, useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import MapView, {Marker} from 'react-native-maps'
import { requestForegroundPermissionsAsync, getCurrentPositionAsync,
} from 'expo-location'
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { THEME } from '../../theme';


export function Busca() {
    const [location, setLocation] = useState(null);

    async function requestLocationPermissions() {
        const { granted } = await requestForegroundPermissionsAsync();

        if(granted) {
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);

            console.log("Localização atual =>", currentPosition)
        }
    } 

    useEffect(() => {
        requestLocationPermissions()
    }, [])


  return ( 
    <SafeAreaView style={styles.container}>
        <StatusBar />
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
        </View>
        
        <MapView style={styles.map} >
            <Marker 
                coordinate={{
                    latitude: 0,
                    longitude: 0
                }}
            />
        </MapView>
    </SafeAreaView>
  );
}