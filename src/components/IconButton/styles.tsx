import {StyleSheet} from 'react-native';

const IconButtonStyles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#EDF0F7',
    marginTop: 16,
    borderRadius: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 16,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    marginEnd: 16,
  },
});

export default IconButtonStyles;
