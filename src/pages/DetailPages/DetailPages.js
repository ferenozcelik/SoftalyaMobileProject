import React, {useRef} from 'react';
import styles from './DetailPages.style';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView from 'react-native-maps';
import useFetch from '../../hooks/useFetch';
import Loading from '../../Components/Loading/Loading';
import Markers from '../../Components/Markers/Markers';
import {SafeAreaView} from 'react-native-safe-area-context';
const DetailPages = ({navigation, route}) => {
  const mapRef = useRef();
  const {data, loading} = useFetch();
  const {item} = route.params;
  const renderUserMarker = () => {
    return data.map(({id, avatar, address: {coordinates}}) => {
      return (
        <Markers
          key={id}
          coordinates={{
            latitude: coordinates.lat,
            longitude: coordinates.lng,
          }}
          userImageURL={avatar}
          onSelect={() => handleMarkerSelect(coordinates)}
        />
      );
    });
  };
  function handleMarkerSelect(coor) {
    mapRef.current.animateToRegion({
      latitude: coor.lat,
      longitude: coor.lng,
      latitudeDelta: 8,
      longitudeDelta: 8,
    });
  }
  console.log({data, loading});

  return (
    <View style={styles.container}>
      <View style={styles.header_logo}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPages')}>
          <Icon name="chevron-left" size={40} color="black" />
        </TouchableOpacity>
        <Image
          style={styles.image2}
          source={require('../../../assets/images/logo2.png')}
        />
        <Text style={styles.text}> Detaylar</Text>
      </View>

      <View style={styles.map_container}>
        <SafeAreaView style={{flex: 1}}>
          <MapView provider="google" style={{flex: 1}}>
            {data && renderUserMarker()}
          </MapView>

          {loading && <Loading />}
        </SafeAreaView>
      </View>
      <View style={styles.box}>
        <Text style={styles.detay_title}>{item.title}</Text>
        <Text style={styles.detay}>{item.description}</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.btn_k}
          onPress={() => navigation.navigate('MapPages', {item: item})}>
          <Text style={styles.txt}>Sürüşü Kabul Et</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn_r}
          onPress={() => navigation.navigate('TaskPage', {item: item})}>
          <Text style={styles.txt_r}>Sürüşü Reddet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DetailPages;
