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
  top: 50px;
  border-radius: 25px;
  box-shadow: 0px 4px 12px rgba(8, 2, 24, 0.15);
  width: 80%;
  background-color: ${({ theme }) => theme.colors.background.main};
  height: 40%;
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
  height:50%;
  width:80%;
  box-shadow: 0px 4px 12px rgba(8, 2, 24, 0.15);
  border-radius: 20px;
  align-selft:center;
`

export const TextPhrasesContainerImage = styled.Image`
  height: 10%;
  width: 30%;
  border-radius: 20px;
`

export const TextPhrasesContainerFilled = styled.Text`
  width: 60%
  margin-top: 5px;
  font-size: ${({ theme }) => theme.text.h5};
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.colors.typography.main};
`
