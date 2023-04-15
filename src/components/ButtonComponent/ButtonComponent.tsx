import {
  View,
  Text,
  Pressable,
  ViewStyle,
  TextStyle,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';

type Props = {
  label: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress: Function;
  isLoading?: boolean;
};

const ButtonComponent = (props: Props) => {
  const {buttonStyle, textStyle, label, onPress, isLoading = false} = props;

  const combineButtonStyles = StyleSheet.flatten([
    styles.container,
    buttonStyle,
  ]);
  const combineTextStyles = StyleSheet.flatten([styles.textStyle, textStyle]);

  return (
    <Pressable onPress={() => onPress()} style={combineButtonStyles}>
      {isLoading ? (
        <ActivityIndicator color="white" size={'small'} />
      ) : (
        <Text style={combineTextStyles}>{label}</Text>
      )}
    </Pressable>
  );
};

export default memo(ButtonComponent);
