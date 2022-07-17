import React, { Fragment, useMemo } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useTheme } from 'styled-components/native';
import AppIcon, { IconName } from '../Shared/Icon';
import { Label } from '../Shared/Typography';
import { ServiceCardContainer } from './styles';

type ServiceCardProps = {
  title: string;
  icon: IconName;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon }) => {
  const { colors } = useTheme();

  return (
    <ServiceCardContainer>
      <Fragment>
        <AppIcon icon={icon} color={colors.text} />
        <Label style={{ marginTop: 6 }}>{title}</Label>
      </Fragment>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
