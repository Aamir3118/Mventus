import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import Logo from '../../components/Logo';
import LoginStyles from './styles';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';

const Login = ({navigation}: {navigation: any}) => {
  const [textChanged, setTextChanged] = useState('');
  const [error, setError] = useState('');

  const handleTextChange = (text: string) => {
    setTextChanged(text);
  };

  const handleLogin = () => {
    if (!textChanged.trim()) {
      setError('Please enter your mobile number or email address.');
      return;
    }
    navigation.navigate('OTPVerify');
    setError('');
    setTextChanged('');
  };
  return (
    <View style={LoginStyles.container}>
      <Logo />
      <View style={LoginStyles.containerLogin}>
        <Text style={LoginStyles.txtLogin}>Login</Text>
        <Text style={LoginStyles.txtLoginInfo}>
          Login with Email Address & Mobile Number.
        </Text>
        <InputText
          placeholder={'Enter Mobile Number and Email address'}
          onTextChange={handleTextChange}
          value={textChanged}
        />
        {error ? <Text style={LoginStyles.errorText}>{error}</Text> : null}
        <Button onPress={handleLogin} text={'CONTINUE'} />
        <View style={LoginStyles.terms}>
          <Text style={LoginStyles.termsText}>
            By continuing, you agree to our{'\n'}
            <Text style={LoginStyles.linkText}>Terms of Use</Text>
            <Text> & </Text>
            <Text style={LoginStyles.linkText}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
      <View style={LoginStyles.containerGoogle}>
        <View style={LoginStyles.line}>
          <Image source={require('../../assets/line.png')} />
          <Text style={LoginStyles.txtOrLogin}>Or login with</Text>
          <Image source={require('../../assets/line.png')} />
        </View>
        <IconButton
          iconSource={require('../../assets/google.png')}
          buttonText="Continue with Apple ID"
          onPress={() => {}}
        />
        <IconButton
          iconSource={require('../../assets/apple.png')}
          buttonText="Continue with Apple ID"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default Login;
