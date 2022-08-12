import {StyleSheet} from 'react-native';
import color from '../../../assets/color/color';

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#D9E0EA',
    flex: 1,
  },
  head_container: {
    backgroundColor: color.blue,
    borderBottomLeftRadius: 100,
    justifyContent: 'center',

    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
    margin: 20,
    marginBottom: 20,
  },
  head_title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 36,
    marginBottom: 30,
  },
  bottom_title: {
    color: color.blue,
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  bottom_container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 52,
    width: 300,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: 'white',
    paddingLeft: 15,
  },

  bottom: {
    backgroundColor: color.blue,
    height: 20,
    justifyContent: 'flex-end',
    marginTop: 111,
  },
  btn: {
    height: 52,
    width: 300,
    marginTop: 20,
    backgroundColor: color.blue,
    borderRadius: 10,
  },
  btn_text: {
    textAlign: 'center',
    color: color.white,
    fontSize: 20,
    margin: 10,
  },
});

export default styles;
