import React, { useCallback } from 'react';
import { useTheme } from 'styled-components/native';
import AppIcon from '../Shared/Icon';
import { Label } from '../Shared/Typography';
import {
  Container,
  MainValue,
  OptionButton,
  OptionsWrapper,
  Value,
  TextWrapper,
  EyeButton,
} from './styles';

const BalanceCard: React.FC = () => {
  const { colors } = useTheme();
  const [seeValues, setSeeValues] = React.useState(false);

  const toggleSeeValues = useCallback(() => {
    setSeeValues(!seeValues);
  }, [seeValues]);

  return (
    <Container>
      <EyeButton onPress={toggleSeeValues}>
        <AppIcon icon={seeValues ? 'eye-on' : 'eye-off'} size={28} />
      </EyeButton>
      <Label>Current Balance</Label>
      <MainValue>R$ 20,00</MainValue>
      <OptionsWrapper>
        <OptionButton>
          <AppIcon size={40} icon="income" color={colors.green} />
          <TextWrapper>
            <Label>Incomes</Label>
            <Value color={colors.green}>R$ 10,00</Value>
          </TextWrapper>
        </OptionButton>
        <OptionButton>
          <AppIcon size={40} icon="expense" color={colors.red} />
          <TextWrapper>
            <Label>Outcomes</Label>
            <Value color={colors.red}>R$ 10,00</Value>
          </TextWrapper>
        </OptionButton>
      </OptionsWrapper>
    </Container>
  );
};

export default BalanceCard;
