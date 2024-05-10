import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {OtpInput} from 'react-native-otp-entry';
import OtpVerifyStyles from './styles';
import Logo from '../../components/Logo';
import Button from '../../components/Button';

const OtpVerification = () => {
  return (
    <View style={OtpVerifyStyles.container}>
      <Logo />
      <View style={OtpVerifyStyles.containerLogin}>
        <Text style={OtpVerifyStyles.txtLogin}>OTP Verification</Text>
        <Text style={OtpVerifyStyles.txtLoginInfo}>
          Enter One Time Password sent to 9898989898
        </Text>
        <TouchableOpacity>
          <View>
            <Text style={OtpVerifyStyles.linkText}>change</Text>
          </View>
        </TouchableOpacity>
        <View>
          <View style={OtpVerifyStyles.otpInputContainer}>
            <OtpInput
              numberOfDigits={4}
              focusColor={'#17469C'}
              focusStickBlinkingDuration={500}
              theme={{
                pinCodeContainerStyle: {
                  backgroundColor: '#EDF0F7',
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  marginRight: 20,
                },
              }}
            />
            <View style={OtpVerifyStyles.resendOtpContainer}>
              <TouchableOpacity>
                <Text style={OtpVerifyStyles.resendOtp}>Resend OTP?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Button onPress={undefined} text={'Verify'} />
      </View>
    </View>
  );
};

export default OtpVerification;
