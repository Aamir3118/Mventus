import React from 'react';
import {TextInput} from 'react-native';
import InputTextstyles from './styles';

const InputText = ({
  placeholder,
  onTextChange,
  value,
}: {
  placeholder: any;
  onTextChange: any;
  value: any;
}) => {
  return (
    <TextInput
      style={InputTextstyles.input}
      placeholder={placeholder}
      placeholderTextColor="#A7A8AB"
      onChangeText={onTextChange}
      value={value}
    />
  );
};

export default InputText;
