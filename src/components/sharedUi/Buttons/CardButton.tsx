import React from 'react';
import {TouchableHighlight} from 'react-native';
import TextNormal from '../Texts/TextNormal';
import {COLORS} from '../../../styles/colors';

type CardButtonProps = {
  text: string;
  handleSubmit: () => void;
  disabled: boolean;
};

const CardButton = ({text, disabled, handleSubmit}: CardButtonProps) => {
  return (
    <TouchableHighlight
      onPress={handleSubmit}
      underlayColor={COLORS.accent}
      disabled={disabled}
      className="bg-indigo-400 py-4 items-center rounded-b">
      <TextNormal color={COLORS.white}>{text}</TextNormal>
    </TouchableHighlight>
  );
};

export default CardButton;
