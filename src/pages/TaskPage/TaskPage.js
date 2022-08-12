import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import styles from './TaskPage.style';
import data from '../../../data.json';
import colors from '../../../assets/colors/colors';
export default function TaskPage({navigation}) {
  const [list, setList] = useState(data);
  const renderData = ({item}) => (
    <View>
      <View style={style.container}>
        <Text style={style.title}>{item.title}</Text>
        <Text style={style.description}>{item.description}</Text>
        <View style={style.icon}>
          <TouchableOpacity onPress={() => navigation.navigate('DetailPages')}>
            <Image
              style={style.image}
              source={require('../../../assets/images/icon.jpg')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header_logo}>
      <Image
          style={styles.image2}
          source={require('../../../assets/images/logo2.png')}
        />
        <Text style={styles.header_text}>AIRBUS</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.task_text}>Görevler</Text>
      </View>
      <View style={styles.map_container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/map.png')}
        />
      </View>
      <View style={{flex:1}}>
        <FlatList
          data={list}
          renderItem={renderData}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 10,
    borderTopRightRadius: 0,
  },
  title: {
    color: colors.blue,
    fontSize: 15,
    margin: 10,
  },
  description: {
    margin: 5,
  },
  icon: {
    alignItems: 'flex-end',
    margin: 10,
  },
  image: {
    height: 20,
    width: 20,
  },
});
