import styled from "styled-components/native";

export const ScreenContainer = styled.View`
  flex: 1;
  padding: 24px 16px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.main};
`;

export const TextWrapper = styled.View`
  width: 100%;
  margin-top: 48px;
`;

export const Title = styled.Text`
  text-align: center;
  margin-bottom: 18px;
  font-size: ${({ theme }) => theme.text.h2};
  font-family: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.typography.main};
`;

export const Explanation = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.text.h6};
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.colors.subtext.main};
`;

export const LoadingIndicatorContainer = styled.View`
  display: flex;
  width: 160px;
  height: 160px;
  margin-top: 48px;
  align-items: center;
  justify-content: center;
`;