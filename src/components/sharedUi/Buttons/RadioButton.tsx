import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextPara from '../Texts/TextPara';
import {COLORS} from '../../../styles/colors';

type RadioButtonProps = {
  text: string;
  selected: boolean;
  color?: string;
};

const RadioButton = ({text, selected, color}: RadioButtonProps) => {
  return (
    <View className="flex-row items-center mt-4 cursor-pointer">
      <View
        style={[
          styles.outterCircle,
          {borderColor: color ? color : COLORS.accent},
        ]}>
        {selected && (
          <View
            style={[
              styles.innerCircle,
              {backgroundColor: color ? color : COLORS.accent},
            ]}
          />
        )}
      </View>
      <TextPara color={COLORS.black}>{text}</TextPara>
    </View>
  );
};

const styles = StyleSheet.create({
  outterCircle: {
    height: 18,
    width: 18,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  innerCircle: {
    height: 8,
    width: 8,
    borderRadius: 6,
    backgroundColor: '#000',
  },
});

export default RadioButton;
