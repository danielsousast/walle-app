import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 16px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 35%;
  height: 40px;
`;

export const HomeHeader = styled.View`
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const MenuIconButton = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const MenuIcon = styled(AntDesign).attrs(({ theme }) => ({
  name: 'appstore-o',
  color: theme.colors.textLight,
  size: 24,
}))``;

export const ServiceScroll = styled.ScrollView.attrs({
  horizontal: true,
})`
  margin-top: 16px;
`;
