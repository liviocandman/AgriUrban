import React from 'react';
import { View, Text,Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles';


export function PlantsCard({item}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigation.navigate('herbarioPlants', 
        {
        ...item
        })
      } 
    >
      <Image style={styles.image} source={{uri: item.image}}/>  
        <View style={styles.info}> 
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.descHeight}>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>
        </View>
     
    </TouchableOpacity>
  );
}