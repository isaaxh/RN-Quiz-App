import React from 'react';
import {TouchableOpacity} from 'react-native';
import TextNormal from '../Texts/TextNormal';
import {COLORS} from '../../../styles/colors';

type CardButtonProps = {
  handleSubmit: () => void;
};

const CardButton = ({handleSubmit}: CardButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handleSubmit}
      className="bg-indigo-400 py-4 items-center rounded-b">
      <TextNormal color={COLORS.white}>Submit</TextNormal>
    </TouchableOpacity>
  );
};

export default CardButton;
