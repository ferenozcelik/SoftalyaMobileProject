import {StyleSheet} from 'react-native';
import color from '../../../assets/color/color';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9E0EA',
    flex: 1,
  },
  image_container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
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
    marginLeft: 100,
  },
  head_title: {
    color: color.blue,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5,
  },
  image: {
    height: 300,
    width: 350,
  },
  detayBox: {
    padding: 10,
    width: 360,
    height: 150,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 30,
    marginRight: 15,
    marginBottom: 5,
  },
  detaytitle: {
    color: color.blue,
    fontSize: 25,
    fontWeight: 'bold',
  },
  detayt: {
    fontSize: 20,
  },
});
export default styles;
