import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { useTheme } from 'styled-components/native';
import {
  Container,
  Label,
  MainValue,
  OptionButton,
  OptionsWrapper,
  Value,
  TextWrapper,
  EyeIcon,
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
        <EyeIcon active={seeValues} />
      </EyeButton>
      <Label>Current Balance</Label>
      <MainValue>R$ 20,00</MainValue>
      <OptionsWrapper>
        <OptionButton>
          <Icon size={32} name="arrow-up-circle" color={colors.green} />
          <TextWrapper>
            <Label>Incomes</Label>
            <Value color={colors.green}>R$ 10,00</Value>
          </TextWrapper>
        </OptionButton>
        <OptionButton>
          <Icon size={32} name="arrow-down-circle" color={colors.red} />
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
