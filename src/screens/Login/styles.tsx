import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
  },
  containerLogin: {
    marginTop: 40,
  },
  txtLogin: {
    fontSize: 24,
    color: Colors.black,
    alignSelf: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
  txtLoginInfo: {
    fontSize: 12,
    color: Colors.black,
    alignSelf: 'center',
    marginTop: 7,
    fontFamily: 'Poppins-Regular',
  },
  errorText: {
    fontSize: 12,
    color: Colors.red,
    marginTop: 2,
    fontFamily: 'Poppins-Regular',
  },
  terms: {
    alignItems: 'center',
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#17469C',
    marginTop: 1,
    fontFamily: 'Poppins-Regular',
  },
  termsText: {
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  containerGoogle: {
    bottom: 0,
    position: 'absolute',
    marginBottom: 20,
    flex: 1,
    width: '100%',
    marginStart: 15,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtOrLogin: {
    marginHorizontal: 0,
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#A7A8AB',
  },
});

export default LoginStyles;
