import styled from 'styled-components/native';

export const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const Label = styled.Text`
  margin-bottom: 4px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
`;
