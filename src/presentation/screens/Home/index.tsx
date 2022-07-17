import React from 'react';
import BalanceCard from '../../components/BalanceCard';

import {
  Container,
  Content,
  Logo,
  MenuIcon,
  MenuIconButton,
  HomeHeader,
  ServiceScroll,
} from './styles';
import { SectionTitle } from '../../components/Shared/Typography';
import ServiceCard from '../../components/ServiceCard';
import TransactionsList from '../../components/TransactionsList';

const Home: React.FC = () => {
  return (
    <Container>
      <HomeHeader>
        <Logo source={require('../../assets/logo.png')} />
        <MenuIconButton>
          <MenuIcon />
        </MenuIconButton>
      </HomeHeader>
      <Content>
        <SectionTitle>Account Overview</SectionTitle>
        <BalanceCard />
        <SectionTitle style={{ marginTop: 32 }}>Quick Access</SectionTitle>
        <ServiceScroll>
          <ServiceCard title="Transactions" icon="transaction" />
          <ServiceCard title="Accounts" icon="bank" />
          <ServiceCard title="Categories" icon="category" />
        </ServiceScroll>
        <SectionTitle style={{ marginTop: 32 }}>Last Trasactions</SectionTitle>
        <TransactionsList />
      </Content>
    </Container>
  );
};

export default Home;
