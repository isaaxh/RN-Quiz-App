import React from 'react';
import {TouchableHighlight} from 'react-native';
import TextNormal from '../Texts/TextNormal';
import {COLORS} from '../../../styles/colors';

type CardButtonProps = {
  text: string;
  handleSubmit: () => void;
};

const CardButton = ({text, handleSubmit}: CardButtonProps) => {
  return (
    <TouchableHighlight
      onPress={handleSubmit}
      underlayColor={COLORS.accent}
      className="bg-indigo-400 py-4 items-center rounded-b">
      <TextNormal color={COLORS.white}>{text}</TextNormal>
    </TouchableHighlight>
  );
};

export default CardButton;
