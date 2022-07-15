import React from 'react';
import BalanceCard from '../../components/BalanceCard';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {
  Container,
  Content,
  MenuIcon,
  MenuIconButton,
  HomeHeader,
} from './styles';
import { SectionTitle } from '../../components/Shared/Typography';
import { Image } from 'react-native';

const Home: React.FC = () => {
  return (
    <Container>
      <HomeHeader>
        <Image
          source={require('../../assets/logo.png')}
          resizeMode="contain"
          style={{
            width: 140,
            height: 40,
          }}
        />
        <MenuIconButton>
          <MenuIcon />
        </MenuIconButton>
      </HomeHeader>
      <Content>
        <SectionTitle>Account Overview</SectionTitle>
        <BalanceCard />
      </Content>
    </Container>
  );
};

export default Home;
