import React, {useRef, useState} from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from './DetailPagesStyle';
import MapView from 'react-native-maps';
import useFetch from '../../hooks/useFetch';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Markers from '../../Component/Marker/Markers';
import Loading from '../../Component/Loading/Loading';

const DetailPages = ({navigation, route}) => {
  const mapRef = useRef();
  const [user, setUser] = useState();
  const [infoModalVissibility, setInfoModalVissibility] = useState(false);
  const {item} = route.params;
  const {data, loading} = useFetch();
  const renderUserMarker = () => {
    return data.map(
      ({
        id,
        avatar,
        first_name,
        last_name,
        username,
        address: {coordinates},
      }) => {
        return (
          <Markers
            key={id}
            coordinates={{
              latitude: coordinates.lat,
              longitude: coordinates.lng,
            }}
            userImageURL={avatar}
            onSelect={() =>
              handleMarkerSelect(coordinates, {first_name, last_name, username})
            }
          />
        );
      },
    );
  };
  function handleMarkerSelect(coor, selectedUser) {
    setUser(selectedUser);
    handleModalVisible();
    mapRef.current.animateToRegion({
      latitude: coor.lat,
      longitude: coor.lng,
      latitudeDelta: 10,
      longitudeDelta: 10,
    });
  }
  function handleModalVisible() {
    setInfoModalVissibility(!infoModalVissibility);
  }
  return (
    <View style={styles.container}>
      <View style={styles.bass}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TaskPages');
          }}>
          <Icon name="chevron-left" size={40} color="black" />
        </TouchableOpacity>
        <Image
          style={styles.img}
          source={require('../../../assets/images/logok.png')}
        />
        <Text style={styles.head_title}>Detaylar</Text>
      </View>

      <View style={styles.map_container}>
        <SafeAreaView style={{flex: 1}}>
          <MapView provider="google" style={{flex: 1}}>
            {data && renderUserMarker()}
          </MapView>
          {loading && <Loading />}
        </SafeAreaView>
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
