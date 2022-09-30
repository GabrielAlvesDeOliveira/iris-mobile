import styled from "styled-components/native";

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.main};
  `;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 10px 24px 28px 24px;
  background-color: ${({ theme }) => theme.colors.background.main};
`;

export const GreetingsWrapper = styled.View`
  margin-bottom: 28px;
`;

export const Greetings = styled.Text`
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.text.h3};
  font-family: ${({ theme }) => theme.font.semibold};
  color: ${({ theme }) => theme.colors.typography.main};
`;

export const Description = styled.Text`
  width: 100%;
  font-size: ${({ theme }) => theme.text.h6};
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.colors.subtext.main};
`;

export const ResourcesWrapper = styled.View`  
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background.main};
`;