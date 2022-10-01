import styled from 'styled-components/native';

export const ResourceButtonContainer = styled.Pressable`
  flex: 1;
  height: 47.6%;
  display: flex;
  min-width: 46%;
  align-items: center;
  border-radius: 24px;
  flex-direction: column;
  justify-content: center;
  padding: 24px 14px 24px 14px;
  ${props => props.id === 0 && 'margin-bottom: 24px;'}
  background-color: ${({ theme }) => theme.colors.surface.main};
  ${props => props.id === 0 || props.id === 2 ? 'margin-right: 24px;' : ''}
`;

export const Label = styled.Text`
  margin: 0;
  padding: 0;
  width: 102%;
  margin-top: 18px;
  text-align: center;
  font-size: ${({ theme }) => theme.text.h6};
  font-family: ${({ theme }) => theme.font.semibold};
  color: ${(props) => props.theme.colors.resources[props.name]};
`;

export const IconWrapper = styled.View`
  width: 60px;
  height: 60px;
  display: flex;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.resources[props.name]}26;
`;

export const SectionName = styled.Text`
  margin-bottom: 18px;
  font-size: ${({ theme }) => theme.text.h5};
  font-family: ${({ theme }) => theme.font.semibold};
  color: ${({ theme }) => theme.colors.typography.main};
`;