import styled from "styled-components/native";

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.main};
`;

export const ContentContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 42px 16px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary.main};
`;

export const IconWrapper = styled.View`
  width: 220px;
  height: 220px;
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  border-radius: 220px;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.resources[props.name]}26;
`;

export const PresentationContent = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleHeading = styled.Text`
  margin: 0 0 18px 0;
  text-align: center;
  font-size: ${({ theme }) => theme.text.h4};
  font-family: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.typography.main};
`;

export const Description = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.text.h6};
  font-family: ${({ theme }) => theme.font.semibold};
  color: ${({ theme }) => theme.colors.subtext.main};
`;

export const ButtonGroup = styled.View`
  width: 100%;
  bottom: 42px;
  display: flex;
  max-width: 100%;
  position: absolute;
  align-self: center;
  flex-direction: row;
`;

export const GroupContentButton = styled.View`
  flex: 1;
  height: 58px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Label = styled.Text`
  margin-left: 10px;
  font-size: ${({ theme }) => theme.text.h5};
  font-family: ${({ theme }) => theme.font.semibold};
  color: ${({ theme }) => theme.colors.background.main};
`;