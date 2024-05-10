import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import IconButtonStyles from './styles';
const IconButton = ({
  iconSource,
  buttonText,
  onPress,
}: {
  iconSource: any;
  buttonText: any;
  onPress: any;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={IconButtonStyles.button}>
        <Image source={iconSource} style={IconButtonStyles.icon} />
        <Text style={IconButtonStyles.buttonText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default IconButton;
