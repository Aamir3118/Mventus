import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import ButtonStyles from './styles';

const Button = ({onPress, text}: {onPress: any; text: any}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={ButtonStyles.buttonContainer}>
        <Text style={ButtonStyles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
