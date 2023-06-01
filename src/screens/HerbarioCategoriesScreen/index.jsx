import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { useRoute } from '@react-navigation/native'

import { styles } from './styles';

import { GoBackButtom } from '../../components/GoBackButtom';
import { PlantsCard } from '../../components/PlantsCard';

export function HerbarioCategoriesScreen() {
  const {params} = useRoute();
  let item = params;

return (

  <View style={styles.container}>
      <ScrollView>
          <View style={{position:'relative'}}> 
              <Image style={{width: '100%', height: 250}} source={{uri: item.data.image}}/>
              <GoBackButtom />
          </View>
          <View
              style={styles.cardRadius}
          > 
              <View style={styles.paddingHorizontal}>
                  <Text style={styles.titleName}>
                      {item.data.name}
                  </Text>
                  <Text style={styles.desc}>
                    {item.data.desc}
                  </Text>
              </View>   
          </View>

          <View style={styles.cardPlants}>
          {item.data.plants.map(({...plants}, index)=>{
                    return (
                        <PlantsCard item={{...plants}} key={index} />
                    )
                })}
          </View>
      </ScrollView>
  </View>
);
}