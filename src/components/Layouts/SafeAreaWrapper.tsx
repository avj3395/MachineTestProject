import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  StatusBar,
  StatusBarProps,
  StatusBarStyle,
} from 'react-native';
import React from 'react';
import {COLORS} from '@app/constants/themes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  containerStyle?: ViewStyle;
  children: React.ReactNode;
  bgColor?: string;
  insetsBottom?: boolean;
  barStyle?: StatusBarStyle;
  statusbar?: string;
};

const SafeAreaWrapper = (props: Props) => {
  const insets = useSafeAreaInsets();

  const {
    bgColor = COLORS.white,
    containerStyle,
    children,
    barStyle = 'dark-content',
  } = props;
  const combineStyles = StyleSheet.flatten([styles.container, containerStyle]);

  const CustomStatusBar = () => {
    return (
      <View style={{height: insets.top, backgroundColor: bgColor}}>
        <StatusBar
          animated={true}
          backgroundColor={bgColor}
          barStyle={barStyle}
        />
      </View>
    );
  };

  return (
    <>
      <CustomStatusBar />
      <View style={combineStyles}>{children}</View>
    </>
  );
};

export default SafeAreaWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
});
