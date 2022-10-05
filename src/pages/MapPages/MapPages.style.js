import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9E0EA',
    flex: 1,
  },
  header: {
    backgroundColor: colors.blue,
    height: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  task_text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    height: 350,
    width: 350,
  },
  map_container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  header_logo: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  image2: {
    height: 40,
    width: 40,
    marginRight: 5,
    marginLeft: 140,
  },
  map_container: {
    height: 350,
 
  },
  box: {
    backgroundColor: 'white',
    color: 'white',
    height: 150,
    width: 360,
    margin: 15,
    marginTop: 20,
    marginRight: 15,
    padding: 10,
    marginBottom: 1,
    borderRadius: 30,
  },
  detay_title: {
    fontSize: 30,
    color: colors.blue,
    fontWeight: 'bold',
  },
  detay: {
    fontSize: 20,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  startRideButton: {
    width: 170,
    height: 50,
    backgroundColor: colors.darkGreen,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 5,
  },
  endRideButton: {
    width: 170,
    height: 50,
    backgroundColor: colors.lightRed,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 5,
  },
});
export default styles;
