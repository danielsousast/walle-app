import styled, { DefaultTheme } from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DefaultCard } from '../Shared/Layout';

export const Container = styled(DefaultCard)`
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

export const Value = styled.Text<{ color?: string }>`
  font-size: 16px;
  font-weight: bold;
  color: ${({ color, theme }) => color || theme.colors.textDark};
`;

export const Label = styled.Text`
  margin-bottom: 4px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
`;

export const MainValue = styled(Value)`
  font-size: 28px;
`;

export const OptionsWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const OptionButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
`;

export const TextWrapper = styled.View`
  margin-left: 12px;
`;

type EyeIconProps = {
  active: boolean;
  theme: DefaultTheme;
};

export const EyeIcon = styled(Ionicons).attrs(
  ({ active, theme }: EyeIconProps) => ({
    name: active ? 'eye-outline' : 'eye-off-outline',
    color: theme.colors.textLight,
    size: 24,
  })
)<EyeIconProps>``;

export const EyeButton = styled.TouchableOpacity`
  opacity: 0.8;
  position: absolute;
  right: 24px;
  top: 16px;
`;
