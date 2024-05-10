import React from 'react';
import {View, Image} from 'react-native';
import LogoStyles from './styles';

const Logo = () => {
  return (
    <View style={LogoStyles.logo}>
      <Image source={require('../../assets/logo.png')} />
      <View style={LogoStyles.space} />
      <Image source={require('../../assets/innovate.png')} />
    </View>
  );
};

export default Logo;
