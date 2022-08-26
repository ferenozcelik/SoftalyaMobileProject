import {StyleSheet} from 'react-native';
import React from 'react';

import color from '../../../assets/color/color';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9E0EA',
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.blue,
    height: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  head_title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: 350,
  },
  map_container: {
    height: 250,
    marginBottom: 0,
  },
  bass: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'flex-start',
  },
  img: {
    width: 45,
    height: 45,
    marginLeft: 70,
  },
  backIcon: {
    color: color.blue,
    marginLeft: 15,
  },
  head_title: {
    color: color.blue,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default styles;
