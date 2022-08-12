import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './DetailPagesStyle';

const DetailPages = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.bass}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TaskPage')}></TouchableOpacity>
        <Image
          style={styles.img}
          source={require('../../../assets/images/logok.png')}
        />
        <Text style={styles.head_title}>Detaylar</Text>
      </View>

      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/map2.png')}
        />
      </View>
      <View style={styles.detayBox}>
        <Text style={styles.detaytitle}>{item.title}</Text>
        <Text style={styles.detayt}>{item.description}</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.buttonK}
          onPress={() => {
            navigation.navigate('TaskDetail', {item: item});
          }}>
          <Text style={styles.buttonText}>Kabul Et</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonR} onPress={() => {}}>
          <Text style={styles.buttonText}>Reddet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DetailPages;
