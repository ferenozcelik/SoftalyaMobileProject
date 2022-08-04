import {StyleSheet, Dimensions} from 'react-native';
import colors from '../assets/colors/colors';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  loginHeaderBackground: {
    left: -2,
    width: width + 2,
    height: 210,
    backgroundColor: colors.blue,
    borderBottomLeftRadius: 100,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginHeaderLogo: {
    width: 130,
    height: 130,
  },
  loginHeaderText: {
    fontFamily: 'Lato-Bold',
    marginTop: 5,
    fontSize: 32,
    color: colors.white,
  },
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.blue,
  },
  inputWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30, //
  },
  input: {
    backgroundColor: colors.white,
    width: 300,
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 15,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.blue,
    width: 300,
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Lato-Bold',
    color: colors.white,
    fontSize: 18,
  },
});

export default styles;
