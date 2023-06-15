import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';

export function DishesCard({item}) {
  return (
    <View style={styles.container}>
      
      <Image style={{height: 60, width: 60}} source={{uri: item.image}}/>
      
      <View style={styles.info}>
        <Text style={styles.dishName}>{item.name}</Text>
        
        <View style={styles.priceLine}>
          <Text style={styles.price}>
            R$ {item.price}
          </Text>
          
          <View style={styles.plusMinusIconsLine}>
            <TouchableOpacity style={styles.plusMinusIcons}>
                <AntDesign name='minus' size={20} color="white"/>
            </TouchableOpacity>
            <Text style={styles.priceProduct}>0</Text>
            <TouchableOpacity style={styles.plusMinusIcons}>
                <AntDesign name='plus' size={20} color="white"/>
            </TouchableOpacity>
          </View>

        </View>
      </View>
      
      
  </View>
  );
}