import styled from "styled-components/native";

export const PreviewContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.main};
`;

export const PreviewBackground = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ButtonGroup = styled.View`
  width: 88.3%;
  bottom: 24px;
  padding: 18px;
  display: flex;
  margin: 0 24px;
  position: absolute;
  border-radius: 24px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background.main};
`;

export const ButtonLabel = styled.Text`
  font-size: 18px;
  color: ${({ theme, color }) => theme.colors[color].main};
  font-family: ${({ theme }) => theme.font.semibold};
`;