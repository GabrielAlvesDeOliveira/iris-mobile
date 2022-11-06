import styled from "styled-components/native";

export const TextScreen = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.main};
  flex-direction: column;
  flex: 1
`;

export const TextContainer = styled.View`
  align-self: center;
  border-radius: 25px;
  border-color: rgba(8, 2, 24, 0.15);
  border-width: 1px;
  padding-bottom: 10px;
  box-shadow: 4px 12px rgba(8, 2, 24, 0.15);
  width: 80%;
  background-color: ${({ theme }) => theme.colors.background.main};
`;

export const TextContainerFilled = styled.Text`
  padding: 20px;
  text-align: justify;
  word-break: break-all;
  font-size: ${({ theme }) => theme.text.h6};
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.colors.typography.main};
`;

export const TextContainerButton = styled.Text`
  padding: 5px;
  font-size: ${({ theme }) => theme.text.h5};
  font-family: ${({ theme }) => theme.font.semibold};
  color: ${({ theme }) => theme.colors.background.main};
`;

export const TextPhrasesLabel = styled.Text`
  font-size: ${({ theme }) => theme.text.h2};
  font-family: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.typography.main};
  margin-top: 80px;
  margin-left: 10px;
  text-align: left;
`;

export const TextPhrasesContainer = styled.View`
  width:80%;
  box-shadow: 0px 4px 12px rgba(8, 2, 24, 0.15);
  border-radius: 20px;
  align-self:center;
`

export const TextPhrasesContainerImage = styled.Image`
  width: 30%;
  border-radius: 20px;
`
export const TextImage = styled.Image`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size + 70}px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const TextPhrasesContainerFilled = styled.Text`
  width: 60%;
  margin-top: 5px;
  font-size: ${({ theme }) => theme.text.h5};
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.colors.typography.main};
`

export const CardText = styled.View`
  padding: 14px;
  box-shadow: 0px 4px 12px rgba(8, 2, 24, 0.15);
  margin: 24px 0px 24px 0px;
  border-color: rgba(8, 2, 24, 0.15);
  border-width: 1px;
  border-radius: 16px;
`

export const TextCard = styled.Text`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.text.h5};
  line-height: 25px;
  color: ${({ theme }) => theme.colors.typography.main};
  width: 200px;
`

export const PorcentageText = styled.Text`
  font-family: ${({ theme }) => theme.font.semibold};
  font-size: ${({ theme }) => theme.text.h6};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.subtext.main};
`

export const TextView = styled.View`
  justify-content: center;
`

export const MainImage = styled.Image`
  margin-bottom: 14px;
`

export const IconImage = styled.Image`

`

export const BottomBarText = styled.View`
  flex-direction: row;
  justify-content: space-between;
`