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
    elevation: 3,
  },
  screenHeader: {
    backgroundColor: colors.white,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLogo: {
    // To-Do: LOGOYU ORTALAMANIN DAHA İYİ BİR YOLUNU BUL
    marginRight: width / 2 - 20,
    width: 40,
    height: 40,
  },
  backIcon: {
    color: colors.blue,
    marginLeft: 15,
  },
  titleWrapper: {
    backgroundColor: colors.blue,
    height: 45,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.white,
  },
  mapWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  map: {
    width: 382,
    height: 230,
  },
  taskDetailsWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskDetailsBox: {
    backgroundColor: colors.white,
    width: 370,
    height: 230,
    borderRadius: 15,
    marginTop: 15,
  },
  taskDetailsTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: colors.blue,
    marginTop: 10,
    marginLeft: 15,
  },
  taskDetailsDescription: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.darkGray,
    marginTop: 10,
    marginLeft: 15,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 30,
  },
  acceptButton: {
    width: 140,
    height: 40,
    backgroundColor: colors.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  rejectButton: {
    width: 140,
    height: 40,
    backgroundColor: colors.lightRed,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'Lato-Bold',
    color: colors.white,
    fontSize: 16,
  },
});

export default styles;
