import {StyleSheet} from 'react-native';
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
    color: color.blue,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5,
  },
  image: {
    height: 200,
    width: 350,
  },
  image_container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  detayBox: {
    padding: 10,
    width: 360,
    height: 250,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 30,
    marginRight: 15,
    marginBottom: 5,
  },
  button: {
    flexDirection: 'row',

    justifyContent: 'center',
    color: 'white',
  },
  buttonK: {
    backgroundColor: color.darkGreen,
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonR: {
    backgroundColor: color.lightRed,
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
  },
  detaytitle: {
    color: color.blue,
    fontSize: 25,
    fontWeight: 'bold',
  },
  detayt: {
    fontSize: 20,
  },
  bass: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'flex-start',
  },
  img: {
    marginRight: 5,
    width: 45,
    height: 45,
    marginLeft: 100,
  },
  backIcon: {
    color: color.blue,
    marginLeft: 15,
  },
});

export default styles;
