import {COLORS} from '@app/constants/themes';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  ViewStyle,
  KeyboardTypeOptions,
  StyleSheet,
} from 'react-native';
import styles from './styles';

type textInputFieldProps = {
  placeHolderStyle?: ViewStyle;
  placeholder: string;
  placeholderTextColor?: string;
  onChangeText: (text: string) => void;
  onBlur?: (event: any) => void;
  value: string;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  isDisable?: boolean;
  errorMessage?: string;
  isError?: boolean;
  secureText?: boolean;
  autoFocus?: boolean;
};

const TextInputFieldComponent = (props: textInputFieldProps) => {
  const {
    onChangeText,
    onBlur,
    placeHolderStyle,
    placeholder,
    value,
    isDisable,
    keyboardType = 'default',
    maxLength,
    placeholderTextColor = COLORS.black,
    isError = false,
    errorMessage,
    secureText = false,
    autoFocus = false,
  } = props;
  const combineStyles = StyleSheet.flatten([
    styles.container,
    {borderColor: isError ? 'red' : COLORS.grey},
  ]);

  return (
    <View style={styles.containerWrap}>
      <View style={combineStyles}>
        <TextInput
          style={{...styles.placeHolderStyle, ...placeHolderStyle}}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          keyboardType={keyboardType}
          maxLength={maxLength}
          editable={isDisable}
          secureTextEntry={secureText}
          autoFocus={autoFocus}
        />
      </View>
      {isError && <Text style={styles.errorStyle}>{errorMessage}</Text>}
    </View>
  );
};

export default TextInputFieldComponent;
