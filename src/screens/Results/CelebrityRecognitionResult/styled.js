import styled from "styled-components/native";

export const CelebrityScreen = styled.View`
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.main};
  flex-direction: column;
`;

export const CelebrityImage = styled.Image`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size + 70}px;
  border-radius: 20px;
`;

export const CelebrityNameLabel = styled.Text`
  font-size: ${({ theme }) => theme.text.h3};
  font-family: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.typography.main};
  text-align: center;
  margin-top: 20px;
`;

export const CelebrityConfidenceLabel = styled.Text`
  font-size: ${({ theme }) => theme.text.h5};
  font-family: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.subtext.main};
  text-align: center;
`;

export const CelebrityEmotionsLabel = styled.Text`
  font-size: ${({ theme }) => theme.text.h2};
  font-family: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.typography.main};
  margin-top: 30px
  margin-left: 10px;
`;

export const CelebrityEmotionImage = styled.Image`
  width: 70px;
  height: 70px;
`;

export const CelebrityEmotions = styled.View`
  flex-direction: row;
  text-align: center;
  margin-top: 20px
  justify-content:space-around;
  flex:1;
`;

export const CelebrityEmotionsDetailedLabel = styled.Text`
  font-size: ${({ theme }) => theme.text.h6};
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.colors.subtext.main};
  text-align: center;
`;
