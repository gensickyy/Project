import React, {FC} from 'react';
import styles from '../../assets/styles';
import {ViewStyle, TextStyle, TouchableOpacity, Text} from 'react-native';

interface Props {
  onPress: () => void;
  label: string;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
}

const Button: FC<Props> = props => {
  const {onPress, style, label, textStyle} = props;
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
