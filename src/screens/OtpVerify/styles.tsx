import {StyleSheet} from 'react-native';

const OtpVerifyStyles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  containerLogin: {
    marginTop: 40,
  },
  txtLogin: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: 'black',
    alignSelf: 'center',
  },
  txtLoginInfo: {
    fontSize: 12,
    color: 'black',
    alignSelf: 'center',
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#17469C',
    alignSelf: 'center',
    marginTop: 4,
    marginBottom: 15,
  },
  otpView: {
    flexDirection: 'row',
  },
  resendOtpContainer: {
    justifyContent: 'center',
  },
  resendOtp: {
    color: '#17469C',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  otpInputContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default OtpVerifyStyles;
