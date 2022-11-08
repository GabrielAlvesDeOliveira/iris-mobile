import styled from "styled-components/native";

export const SideBarView = styled.View`
  top: 0;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

export const SideBarHeader = styled.View`
  top: 20;
  right: 20;
  height: 20px;
  width: 100%;
  align-items: flex-end;
`;

export const SideBarThemeSwitcher = styled.View`
  text-align: left;
  align-items: flex-start;
  top: 70;
  flex-direction: row;
  left: 20
  align-items:center;
  justify-content: space-between;
`;

export const SideBarThemeText = styled.Text`
  font-size: ${({ theme }) => theme.text.h5};
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.colors.typography.main};
  left: 20;
`;

export const SideBarTopic = styled.Text`
  font-size: ${({ theme }) => theme.text.h6};
  font-family: ${({ theme }) => theme.font.semibold};
  color: ${({ theme }) => theme.colors.subtext.main};
  text-align: left;
  margin-bottom: 30px;
`;

export const SideBarContainer = styled.View`
  top: 120;
  left: 30;
  flex-direction: column;
`;

export const SideBarButton = styled.View`
  flex-direction: row;
  height: 40px;
  width: 100%;
  align-items: center;
`;

export const SideBarButtonContent = styled.View`
  flex-direction: column;
  text-align: left;
  left: 20
`;

export const SideBarButtonContentFunctionText = styled.Text`
  font-size: ${({ theme }) => theme.text.h5};
  font-family: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.typography.main};
`;

export const SideBarButtonContentDescriptionText = styled.Text`
  font-size: ${({ theme }) => theme.text.h6};
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.colors.subtext.main};
`;
