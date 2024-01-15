import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import TextPara from '../Texts/TextPara';
import {COLORS} from '../../../styles/colors';

type RadioButtonProps = {
  text: string;
  selected: boolean;
  color?: string;
  handleOptionSelect: (option: string) => void;
};

const RadioButton = ({
  text,
  selected,
  color,
  handleOptionSelect,
}: RadioButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => handleOptionSelect(text)}
      className="flex-row items-center mt-4 cursor-pointer">
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
    </TouchableOpacity>
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
