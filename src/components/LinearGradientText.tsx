import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import {StyleSheet, Text, TextProps} from 'react-native';
import {COLORS} from '../styles';

type LinearGradientTextProps = {
  text: string;
  colours: [keyof typeof COLORS, keyof typeof COLORS];
  containerHeight: number | string;
  textStyle: TextProps[`style`];
};

export const LinearGradientText = ({
  text,
  colours,
  containerHeight,
  textStyle,
}: LinearGradientTextProps) => {
  const textElement = <Text style={[textStyle]} children={text} />;

  return (
    <MaskedView maskElement={textElement} style={{height: containerHeight}}>
      <LinearGradient
        colors={colours.map(colour => COLORS[colour])}
        start={{x: 0, y: 0}}
        end={{x: 0.35, y: 0}}
        style={styles.gradientBackground}
      />
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    height: `100%`,
  },
});
