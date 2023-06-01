import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { useRoute } from '@react-navigation/native'

import { styles } from './styles';
import { GoBackButtom } from '../../components/GoBackButtom';

export function HerbarioPlantsScreen() {
    const {params} = useRoute();
    let item = params;

  return (
   <View style={styles.container}>
        <ScrollView>
            <View style={{position:'relative'}}> 
                <Image style={{width: '100%', height: 250}} source={{uri: item.image}}/>
                <GoBackButtom />
            </View>
            <View
                style={styles.cardRadius}
            > 
            <View style={styles.paddingHorizontal}>
                <Text style={styles.titleName}>
                    {item.name}
                </Text>
                
                <View style={styles.datasheet}>
                    <View style={styles.inLine}>
                        <Text style={styles.datasheetTitles}>Nome científico: </Text> 
                        <Text style={{fontStyle: 'italic'}}>{item.scientificName}</Text>
                    </View>
                    <Text><Text style={styles.datasheetTitles}>Nomes populares: </Text>{item.popularName}</Text>
                    <Text><Text style={styles.datasheetTitles}>Altura: </Text>{item.height}</Text>
                    <Text><Text style={styles.datasheetTitles}>Categoria: </Text>{item.category}</Text>
                    <Text><Text style={styles.datasheetTitles}>Clima: </Text>{item.clime}</Text>
                    <Text><Text style={styles.datasheetTitles}>Família: </Text>{item.family}</Text>
                    <Text><Text style={styles.datasheetTitles}>Origem: </Text>{item.origin}</Text>
                </View>
                  <Text style={styles.desc}>
                    {item.desc}
                  </Text>
              </View>   
          </View>

      </ScrollView>
  </View>
  );
}